export const Search = () => {
  return (
    <div class="centerblock__search search">
      <svg class="search__svg">
        <use xlink:href="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        class="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};
