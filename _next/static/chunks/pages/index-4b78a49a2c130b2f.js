(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(8580);
        },
      ]);
    },
    8580: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var l = s(5893),
        r = s(1058),
        a = s(1163),
        n = s(7294),
        o = function (e) {
          var t = e.children;
          return (0, l.jsx)("div", {
            className:
              "w-full p-0 m-0 bg-gradient-to-r from-bg2 to-bg1 cursor-default overflow-x-hidden",
            children: t,
          });
        },
        i = s(603),
        c = s(8193),
        d = s(6261),
        x = {
          src: "/_next/static/media/logo.570532df.png",
          height: 1280,
          width: 853,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAPFBMVEWMj4+ihXJ2fHFkamCIhHmDi4Rnk1WTf2tll0lei0SKh4SAgH52dGOyhGt5gYF/hGqPeV9pfmGZmYnKiGUEtUAJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nB3BiQ2AIBAAwT24V1AU++/VxBn4iXIIb5ie6LY2uOJW41kxody9U5nVPhWjAQy8gbJYAAAAAElFTkSuQmCC",
          blurWidth: 5,
          blurHeight: 8,
        },
        m = s(3990);
      function h() {
        var e = (0, n.useState)(!1),
          t = e[0],
          s = e[1],
          o = (0, n.useState)(!1);
        o[0], o[1];
        var h = (0, n.useState)(0),
          f = h[0],
          p = h[1],
          u = (0, n.useState)(!0),
          A = u[0],
          g = u[1],
          b = [
            ["Home", null],
            ["About", null],
            ["Tokenomics", null],
            ["Roadmap", null],
            ["Socials", null],
          ],
          j = (0, a.useRouter)();
        return (
          (0, n.useEffect)(
            function () {
              if ((s(!1), "/" === j.pathname)) return g(!0);
              g(!1);
            },
            [j]
          ),
          (0, n.useEffect)(function () {
            var e = function () {
              window.pageYOffset, p(window.scrollY);
            };
            document.addEventListener("scroll", e, { passive: !0 });
          }, []),
          (0, l.jsxs)("div", {
            className: "fixed top-0 z-40",
            children: [
              (0, l.jsxs)("div", {
                className: "".concat(
                  (f < 70 && "bg-none") || "bg-secondary",
                  " transition-all duration-500 p-4 md:px-16 md:py-8 flex w-screen items-center justify-between   h-16"
                ),
                children: [
                  (0, l.jsx)("div", {
                    className: "block w-10 p-1",
                    children: (0, l.jsx)(r.Z, {
                      src: x,
                      alt: "logo",
                      layout: "responsive",
                      className: "rounded-full",
                    }),
                  }),
                  (0, l.jsx)("ul", {
                    className: " md:justify-between md:flex hidden",
                    children:
                      A &&
                      b.map(function (e, t) {
                        var s = (0, i.Z)(e, 2),
                          r = s[0];
                        return (
                          s[1],
                          (0, l.jsx)(
                            d.rU,
                            {
                              className:
                                "m-2 text-white text-xl cursor-pointer hover:text-blue-400 ",
                              activeClass: "none",
                              to: "".concat(r),
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              children: r,
                            },
                            t
                          )
                        );
                      }),
                  }),
                  (0, l.jsx)("button", {
                    className:
                      "md:hidden relative p-2 outline-none bg-secondary rounded-full border-4 border-white  after:rounded-full z-50  ".concat(
                        (f < 70 && "text-white") || "text-white"
                      ),
                    onClick: function () {
                      return s(!t);
                    },
                    children:
                      (t && (0, l.jsx)(c.oHP, { size: 30 })) ||
                      (0, l.jsx)(m.rSC, { size: 30 }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "md:hidden absolute  z-40 overflow-hidden   flex bg-opacity-90  bg-zinc-800 shadow-lg w-full items-center justify-center transition-all ease-out duration-300 ".concat(
                    (t && " max-h-96 py-8") || " max-h-0 py-0"
                  ),
                children: (0, l.jsx)("ul", {
                  className: "flex flex-col ",
                  children:
                    A &&
                    b.map(function (e, t) {
                      var r = (0, i.Z)(e, 2),
                        a = r[0];
                      return (
                        r[1],
                        (A &&
                          (0, l.jsx)(
                            d.rU,
                            {
                              className:
                                "mt-4  text-gray-50  text-center   text-2xl ",
                              onClick: function () {
                                return s(!1);
                              },
                              activeClass: "active",
                              to: "".concat(a),
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              children: a,
                            },
                            t
                          )) ||
                          (0, l.jsx)(
                            "li",
                            {
                              className:
                                "mt-2 pl-2 text-gray-50 m-1 font-light text-xl hover:scale-105",
                              onClick: function () {
                                return j.push("/");
                              },
                              children: a,
                            },
                            t
                          )
                      );
                    }),
                }),
              }),
            ],
          })
        );
      }
      var f = s(8367),
        p = {
          src: "/_next/static/media/1.0734c771.jpg",
          height: 853,
          width: 1280,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADBAURMf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8Ahqt1lLcdUrsMQue1huDyIiQ7UkFyz//Z",
          blurWidth: 8,
          blurHeight: 5,
        };
      s(4107);
      var u = function () {
        return (
          (0, a.useRouter)(),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(h, {}),
              (0, l.jsxs)(o, {
                children: [
                  (0, l.jsxs)("section", {
                    className:
                      " md:h-[calc(100vh)] border-b-[16px] border-b-secondary border-dashed mb-0 pb-0 w-full bg-gradient-to-r from-bg2 to-bg1 md:py-0 bg-cover bg-left md:bg-top md:bg-fixed relative",
                    id: "Home",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "hero absolute w-full h-full z-10 bg-opacity-0 top-0 left-0",
                        children: [
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                          (0, l.jsx)("span", {}),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "h-full flex relative flex-col overflow-y-hidden items-center justify-center md:justify-around md:flex-row-reverse md:gap-2 md:items-center w-full md:px-24 md:pt-8 md:pb-0 pt-20 pb-20 z-30",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              " w-3/4 md:w-1/3 md:block z-20 drop-shadow-2xl bg-primary p-2 rounded-full",
                            children: (0, l.jsx)(r.Z, {
                              src: x,
                              alt: "illustration",
                              layout: "responsive",
                              className: "rounded-full",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "flex flex-col justify-center items-center md:items-start md:pt-0 px-6 md:p-3 w-full md:w-1/2",
                            children: (0, l.jsxs)(f.sm, {
                              children: [
                                (0, l.jsxs)("h3", {
                                  className:
                                    " text-7xl md:text-8xl text-center text-secondary my-3 md:text-left z-30 font-[Greek-Freak] ",
                                  children: [
                                    "Rato the Rat",
                                    (0, l.jsx)("br", {}),
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  className:
                                    "text-white md:text-6xl text-3xl text-center my-5 md:text-start",
                                  children:
                                    'Matt Furie\'s Editor Hints at New Book Featuring "Rato the Rat"',
                                }),
                                (0, l.jsx)("p", {
                                  className:
                                    "text-white md:text-xl text-center break-all my-5 md:text-start border-secondary border-4 border-dashed p-2",
                                  children:
                                    "0xComingSoon",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center bg-bg2 border-secondary border-4 border-dashed gap-3 w-fit mt-5 p-2 rounded-3xl",
                                  children: [
                                    (0, l.jsxs)("a", {
                                      href: "https://t.me/RatoTheRat",
                                      children: [
                                        " ",
                                        (0, l.jsx)(r.Z, {
                                          src: "https://pngimg.com/uploads/telegram/telegram_PNG12.png",
                                          alt: "logo",
                                          width: 50,
                                          height: 50,
                                          className: " ",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("a", {
                                      href: "https://x.com/RatoTheRatCoin",
                                      children: [
                                        " ",
                                        (0, l.jsx)(r.Z, {
                                          src: "https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp",
                                          alt: "logo",
                                          width: 50,
                                          height: 50,
                                          className: " ",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("a", {
                                      href: "https://www.dextools.io/app/en/token/0xComingSoon",
                                      children: [
                                        " ",
                                        (0, l.jsx)(r.Z, {
                                          src: "https://seeklogo.com/images/D/dextools-logo-4EDDD2DF98-seeklogo.com.png",
                                          alt: "logo",
                                          width: 50,
                                          height: 50,
                                          className: " ",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("a", {
                                      href: "https://dexscreener.com/ethereum/0x8d02988296949cd054623802c1115973a9afe307",
                                      children: [
                                        " ",
                                        (0, l.jsx)(r.Z, {
                                          src: "https://pbs.twimg.com/profile_images/1462287879565201409/5UYqudVs.jpg",
                                          alt: "logo",
                                          width: 50,
                                          height: 50,
                                          className: " ",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("section", {
                    className:
                      "p-7 md:px-20 flex justify-center items-center border-b-[16px] border-b-secondary border-dashed",
                    id: "About",
                    children: (0, l.jsxs)("div", {
                      className:
                        "flex flex-col md:text-2xl md:w-3/4 text-lg justify-start items-center text-center text-white border-8 border-dashed border-secondary rounded-3xl p-4",
                      children: [
                        (0, l.jsx)(f.LG, {
                          children: (0, l.jsx)("div", {
                            className: "w-full md:w-full mb-4 ",
                            children: (0, l.jsx)(r.Z, {
                              src: p,
                              alt: "illustration",
                              layout: "responsive",
                              className: " rounded-3xl",
                            }),
                          }),
                        }),
                        (0, l.jsx)("span", {
                          className:
                            "md:text-4xl text-2xl text-secondary font-[Greek-Freak]",
                          children: "Welcome to Rato the Rat ($RATO)",
                        }),
                        "Matt Furie, the artist best known for creating Pepe the Frog, has been working on a new book. The news comes from his editor, who goes by the handle @beuys_on_sale_ on Instagram. In a recent post, the editor hinted at an upcoming project featuring a new character named Rato.",
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)("br", {}),
                        "$RATO represents the next evolution in meme culture, following in the footsteps of Pepe's cultural impact. Join the movement and be part of the early community celebrating Matt Furie's newest creation!",
                      ],
                    }),
                  }),
                  (0, l.jsxs)("section", {
                    className:
                      "flex flex-col justify-center items-center p-6 md:p-12 py-12 w-full bg-bg1 flex-col items-center bg-cover bg-right md:bg-fixed border-b-[16px] border-b-secondary border-dashed",
                    id: "Tokenomics",
                    children: [
                      (0, l.jsx)(f.pT, {
                        children: (0, l.jsx)("h3", {
                          className:
                            "text-5xl md:text-7xl mb-10 text-center w-full text-secondary font-[Greek-Freak]",
                          children: "Tokenomics",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 px-4 md:px-12",
                        children: [
                          { option: "Name", value: "Rato the Rat" },
                          { option: "Ticker", value: "$RATO" },
                          { option: "Supply", value: "420,690,000,000" },
                          { option: "Tax", value: "0/0" },
                        ].map(function (e, t) {
                          return (0,
                          l.jsx)(f.pT, { children: (0, l.jsx)("div", { className: "group py-8 px-5 md:py-12 w-full md:w-[30%] rounded-lg bg-black flex flex-col items-center justify-center bg-opacity-90 border-8 border-secondary border-dashed h-full", children: (0, l.jsxs)("div", { className: "flex flex-col justify-center items-center w-full h-full", children: [(0, l.jsx)("h3", { className: "z-10 text-4xl text-secondary my-3 text-center font-[Greek-Freak]", children: e.option }), (0, l.jsx)("div", { className: "md:text-3xl text-white z-10 text-center", children: e.value })] }) }) }, t);
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "mt-10 w-full md:w-3/4 max-w-3xl flex flex-col items-center",
                        children: (0, l.jsxs)("div", {
                          className:
                            "bg-black bg-opacity-90 border-8 border-secondary border-dashed p-6 rounded-lg w-full",
                          children: [
                            (0, l.jsx)("h3", {
                              className:
                                "text-3xl text-secondary text-center mb-4 font-[Greek-Freak]",
                              children: "Contract Address",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-white text-center break-all",
                              children:
                                "0xComingSoon",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("section", {
                    className:
                      "flex flex-col justify-center items-center p-6 md:p-12 py-12 w-full bg-bg2 flex flex-col items-center bg-cover bg-right md:bg-fixed border-b-[16px] border-b-secondary border-dashed",
                    id: "Roadmap",
                    children: [
                      (0, l.jsx)(f.pT, {
                        children: (0, l.jsx)("h3", {
                          className:
                            "text-5xl md:text-7xl mb-10 text-center w-full text-secondary font-[Greek-Freak] ",
                          children: "Roadmap",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 px-4 md:px-12",
                        children: [
                          {
                            title: "Phase 1",
                            desc: [
                              "Create and launch official social media channels",
                              "Develop and deploy the smart contract",
                              "Build and launch the official website",
                            ],
                          },
                          {
                            title: "Phase 2",
                            desc: [
                              "Grow the community through engaging campaigns",
                              "Implement a comprehensive marketing strategy",
                              "Collaborate with influencers and promoters",
                              "Run targeted ads on social media and crypto platforms",
                            ],
                          },
                          {
                            title: "Phase 3",
                            desc: [
                              "Expand community growth efforts",
                              "Trend on popular platforms like Dexscreener and Solana",
                              "Apply for listings on centralized exchanges (CEXs)",
                              "Achieve CoinMarketCap (CMC) and Coingecko listings",
                            ],
                          },
                        ].map(function (e, t) {
                          return (0, l.jsx)(
                            f.pT,
                            {
                              children: (0, l.jsx)("div", {
                                className:
                                  "group py-8 px-5 md:pb-12 w-full md:w-[30%] rounded-lg bg-black flex flex-col items-center justify-center bg-opacity-90 border-8 border-secondary border-dashed h-full",
                                children: (0, l.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-center items-center w-full h-full",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className:
                                        "z-10 text-4xl text-secondary my-3 text-center font-[Greek-Freak]",
                                      children: e.title,
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "md:text-xl text-white z-10",
                                      children: e.desc.map(function (e, t) {
                                        return (0,
                                        l.jsx)("div", { className: "my-1 flex items-center justify-center text-center gap-3", children: (0, l.jsx)("div", { className: "my-1", children: e }) }, t);
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("section", {
                    className:
                      " flex flex-col justify-center pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-grad bg-opacity-5",
                    id: "Socials",
                    children: [
                      (0, l.jsx)(f.pT, {
                        children: (0, l.jsx)("h3", {
                          style: { WebkitTextStroke: "1px black" },
                          className:
                            "text-center text-5xl md:text-7xl mb-7 w-fit p-1 text-white font-[Greek-Freak] ",
                          children: "Join the Community",
                        }),
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-white text-xl md:text-3xl text-center p-5 md:w-1/2",
                        children:
                          "Be part of something special. Join the $RATO community as we celebrate Matt Furie's newest creation!",
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "flex w-full md:w-3/5 flex-col items-center justify-center relative h-full transition-all duration-500",
                        children: (0, l.jsx)(f.LG, {
                          children: (0, l.jsxs)("div", {
                            className:
                              "flex justify-center items-center bg-white gap-3 w-fit mt-5 p-4 rounded-3xl",
                            children: [
                              (0, l.jsxs)("a", {
                                href: "https://t.me/RatoTheRat",
                                children: [
                                  " ",
                                  (0, l.jsx)(r.Z, {
                                    src: "https://pngimg.com/uploads/telegram/telegram_PNG12.png",
                                    alt: "logo",
                                    width: 50,
                                    height: 50,
                                    className: " ",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("a", {
                                href: "https://x.com/RatoTheRatCoin",
                                children: [
                                  " ",
                                  (0, l.jsx)(r.Z, {
                                    src: "https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp",
                                    alt: "logo",
                                    width: 50,
                                    height: 50,
                                    className: " ",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("a", {
                                href: "https://www.dextools.io/app/en/token/0xComingSoon",
                                children: [
                                  " ",
                                  (0, l.jsx)(r.Z, {
                                    src: "https://seeklogo.com/images/D/dextools-logo-4EDDD2DF98-seeklogo.com.png",
                                    alt: "logo",
                                    width: 50,
                                    height: 50,
                                    className: " ",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("a", {
                                href: "https://dexscreener.com/ethereum/0x8d02988296949cd054623802c1115973a9afe307",
                                children: [
                                  " ",
                                  (0, l.jsx)(r.Z, {
                                    src: "https://pbs.twimg.com/profile_images/1462287879565201409/5UYqudVs.jpg",
                                    alt: "logo",
                                    width: 50,
                                    height: 50,
                                    className: " ",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("section", {
                    className: " text-sm bg-bg2 text-center p-1 text-white",
                    children: [
                      "Rato the Rat ",
                      new Date().getFullYear(),
                      " | All Rights Reserved.",
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [609, 617, 488, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
