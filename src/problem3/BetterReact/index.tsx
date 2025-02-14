import { getPriority } from './utils';
import type { WalletBalance, FormattedWalletBalance } from './types';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    const walletWithValidPriority = balances.filter(
      (balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        if (balancePriority > -99) {
          // ? Not sure what is the bussiness logic here
          // If it only show the empty balance, keep the condition
          // If it should show the balance with amount <= 0, update the condition to balance.amount > 0
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
      }
    );

    const sortedWallet = walletWithValidPriority.toSorted(
      (lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        return rightPriority - leftPriority;
      }
    );

    return sortedWallet;
  }, [balances, prices]);

  const formattedBalances = useMemo(
    () =>
      sortedBalances.map((balance: WalletBalance) => {
        return {
          ...balance,
          formatted: balance.amount.toFixed()
        };
      }),
    [sortedBalances]
  );

  const rows = useMemo(() => {
    // Empty state
    if (!formattedBalances.length)
      return (
        <div class="flex items-center align-center">No data available</div>
      );

    return formattedBalances.map((balance: FormattedWalletBalance) => {
      const usdValue = prices[balance.currency] * balance.amount;
      const key = `${balance.currency}-${balance.blockchain}`;
      return (
        <WalletRow
          className={classes.row}
          key={key}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    });
  }, [formattedBalances]);

  return <div {...rest}>{rows}</div>;
};
