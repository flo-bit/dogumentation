<script lang="ts">
  import { showSearch } from "./CommandPaletteStore";
</script>

<button
  class="search-button bg-base-100 dark:bg-base-900 rounded-full px-3 py-1.5 flex items-center gap-2 text-base-600 hover:text-base-800 dark:text-base-400 dark:hover:text-base-200 border border-base-200 dark:border-base-800"
  onclick={() => {
    $showSearch = true;
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
  <div class="hidden md:block text-xs text-base-700 dark:text-base-300 hover:text-base-900 dark:hover:text-base-100">Search</div>
  <kbd class="text-xs flex gap-0.5 ml-2 md:ml-4">
    <kbd class="font-sans">⌘</kbd>
    <kbd class="font-sans">K</kbd>
  </kbd>
  <div class="sr-only">search</div>
</button>

<noscript>
  <style>
    .search-button {
      display: none;
    }
  </style>
</noscript>
