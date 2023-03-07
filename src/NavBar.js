import CartWidget from "./CartWidget";

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">IñaShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="">Todos los productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">PC Gaming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">PC Hogar y Oficina</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Notebooks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <CartWidget/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default NavBar;