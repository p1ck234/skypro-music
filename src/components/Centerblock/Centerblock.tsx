import styles from "./Centerblock.module.css"
import clsx from "clsx";

export const Centerblock = () => {
  return (
    <div>
      <div class="main__centerblock centerblock">
        {/* <div class="centerblock__search search">
          <svg class="search__svg">
            <use xlink:href="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            class="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div> */}
        <h2 class="centerblock__h2">Треки</h2>
        {/* <div class="centerblock__filter filter">
          <div class="filter__title">Искать по:</div>
          <div class="filter__button button-author _btn-text">исполнителю</div>
          <div class="filter__button button-year _btn-text">году выпуска</div>
          <div class="filter__button button-genre _btn-text">жанру</div>
        </div> */}
        <div class="centerblock__content playlist-content">
          <div class="content__title playlist-title">
            <div class="playlist-title__col col01">Трек</div>
            <div class="playlist-title__col col02">Исполнитель</div>
            <div class="playlist-title__col col03">Альбом</div>
            <div class="playlist-title__col col04">
              <svg class="playlist-title__svg">
                <use xlink:href="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div class="content__playlist playlist">
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Guilt <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Nero
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Welcome Reality
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">4:44</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Elektro <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Elektro
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">2:22</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      I’m Fire <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Ali Bakgor
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    I’m Fire
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">2:22</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Non Stop
                      <span class="track__title-span">(Remix)</span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Стоункат, Psychopath
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Non Stop
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">4:12</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Run Run
                      <span class="track__title-span">(feat. AR/CO)</span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Jaded, Will Clarke, AR/CO
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Run Run
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">2:54</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Eyes on Fire
                      <span class="track__title-span">(Zeds Dead Remix)</span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Blue Foundation, Zeds Dead
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Eyes on Fire
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">5:20</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Mucho Bien
                      <span class="track__title-span">(Hi Profile Remix)</span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Mucho Bien
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">3:41</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Knives n Cherries
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      How Deep Is Your Love
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Calvin Harris, Disciples
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    How Deep Is Your Love
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">3:32</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      Morena <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">
                    Tom Boxer
                  </a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">
                    Soundz Made in Romania
                  </a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">3:36</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg">
                      <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://">
                      <span class="track__title-span"></span>
                    </a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://"></a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://"></a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg">
                    <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
