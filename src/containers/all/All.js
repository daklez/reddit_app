import React from "react";
import { Header } from "../header/Header";
import { Aside } from "../aside/Aside";
import { Main } from "../main/Main";

export const All = () => {
    return (
        <div>
          <header>
            <Header />
          </header>
          <aside>
            <Aside />
          </aside>
          <main>
            <Main />
          </main>
        </div>
      );
}