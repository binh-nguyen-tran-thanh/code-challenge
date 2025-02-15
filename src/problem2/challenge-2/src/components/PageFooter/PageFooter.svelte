<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink
  } from 'flowbite-svelte';
</script>

<Footer
  class="absolute bottom-0 start-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6"
>
  <FooterCopyright href="/" by="@binhnguyen" year={2025} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="https://github.com/binh-nguyen-tran-thanh"
      >Contact</FooterLink
    >
  </FooterLinkGroup>
</Footer>
