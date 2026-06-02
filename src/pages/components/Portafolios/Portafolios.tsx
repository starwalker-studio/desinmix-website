import { Link } from "react-router-dom";
import { PORTFOLIO } from "../../../env/portfolio.env";
import style from "./Portafolios.module.scss";

export const Portafolios = () => {
  return (
    <>
      <section className={style.hero_section}>
        <div className={style.overlay} />
        <div className={style.hero_container}>
          <div className={style.sell_packages_wrapper}>
            <div className={style.hero_content}>
              <div className={style.hero_header}>
                <h2>{PORTFOLIO.title}</h2>
              </div>
              <div className={style.hero_text}>
                <div className={style.flex_text}>
                  <p>{PORTFOLIO.text_1}</p>
                  <p>{PORTFOLIO.text_2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.portfolio_wrapper}>
        <div className={style.portfolio_content}>
          <div className={style.portfolio_grid}>
            {PORTFOLIO.portfolios.map((item) => (
              <div className={style.portfolio_card} key={item.id}>
                <div className={style.card_header} data-color={item.data_color}>
                  <h2>{item.title}</h2>
                </div>
                <div className={style.content}>
                  <div className={style.description}>
                    <p>{item.description}</p>
                  </div>
                  <div className={style.buttons}>
                    {item.buttons.map((button) => (
                      <Link to={button.link} target="_blank" key={button.id}>
                        <button>{button.label}</button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
