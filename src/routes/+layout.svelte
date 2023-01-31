<script>
 import "../app.css";

 import Navbar from "$lib/navbar.svelte"
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
    <!-- Page content here -->
    <Navbar />

    <div class="flex m-2 justify-center">
      <slot />
    </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-neutral text-base-content">
      <!-- Sidebar content here -->
      <h1 class="text-xl font-bold">DMs</h1>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>