import { LitElement, html } from "lit-element";
import "../components/character-card/character-card.js"
import "../components/favorite-characters/favorite-characters.js"
import styles from "./home-page-styles"

class HomePage extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      characters : {type: Array},
      favoriteCharacters: {type: Array},
      isOpen: {type: Boolean},
    }
  }

  constructor() {
    super();
    this.characters = []
    this.favoriteCharacters = []
    this.isOpen = false;
  }

  firstUpdated() {
    this.getData()
  }

  async getData() {
    try {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      if(!response.ok){
        console.log('La peticion no se ejecuto correctamente')
      }
      let result = await response.json();
      this.characters = result.results;
    }catch(error) {
      throw new Error('Ocurrio un error: '+error)
    }
  } 

  _handleFavoriteSent(event) {
    const character = event.detail.character;
    if(this.favoriteCharacters.some(fav => fav.id === character.id)){
      this.favoriteCharacters = this.favoriteCharacters.filter(fav => fav.id !== character.id);
    }else{
      this.favoriteCharacters = [...this.favoriteCharacters, character];
    }
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  render() {
    return html`
      <div class="header">
        <h1>Home page</h1>
        <button @click="${this.openModal}">Lista de favoritos</button>
      </div>
      <div class="card-container">
        ${this.characters.map(item => html`
          <character-card .character=${item} @favorite-sent="${this._handleFavoriteSent}"></character-card>`)}
      </div>

      <div class="modal" ?open="${this.isOpen}">
        <div class="modal-content">
          <span class="close" @click="${this.closeModal}">&times;</span>
          <favorite-characters .listFavorites="${this.favoriteCharacters}"></favorite-characters>
        </div>
      </div>
    `
  }
}

customElements.define("home-page", HomePage)