import React from "react";

import * as S from "./style";

const Cards = () => {
  return (
    <S.CardList>
      <S.Card>
        <img
          src="https://img.icons8.com/doodle/48/000000/retro-tv.png"
          alt="icon"
        />{" "}
        <S.ListTitle>Watch list</S.ListTitle>
      </S.Card>

      <S.Card>
        <img
          src="https://img.icons8.com/doodle/48/000000/chrome-reader-mode.png"
          alt="icon"
        />{" "}
        <S.ListTitle>Read list</S.ListTitle>
      </S.Card>

      <S.Card>
        <img
          src="https://img.icons8.com/doodle/48/000000/photos-folder.png"
          alt="icon"
        />{" "}
        <S.ListTitle>listen list</S.ListTitle>
      </S.Card>

      <S.Card>
        <img
          src="https://img.icons8.com/doodle/48/000000/controller--v1.png"
          alt="icon"
        />{" "}
        <S.ListTitle>play list</S.ListTitle>
      </S.Card>
    </S.CardList>
  );
};

export default Cards;
