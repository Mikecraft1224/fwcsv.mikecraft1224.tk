<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Item 1</a></li>
				<li tabindex="0">
					<a href="/" class="justify-between">
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-neutral">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</li>
				<li><a href="/">Item 3</a></li>
			</ul>
		</div>
		<a href="https://mikecraft1224.tk" class="btn btn-ghost normal-case text-xl">Mikecraft1224</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a href="/">Item 1</a></li>
			<li tabindex="0">
				<a href="/">
					Parent
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-neutral">
					<li><a href="/">Submenu 1</a></li>
					<li><a href="/">Submenu 2</a></li>
				</ul>
			</li>
			<li><a href="/">Item 3</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<p />
	</div>
</div>
