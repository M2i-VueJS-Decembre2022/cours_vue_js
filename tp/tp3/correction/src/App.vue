<template>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img alt="Logo" class="logo" src="./assets/logo.png">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bateau/ajouter" class="nav-link active">Ajouter un bateau</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  .logo{
    width:5%;
  }
  h1,h2,h3,h4,h5{
    font-family: 'Raleway', sans-serif;
  }
</style>