import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePriceFormat } from "../../hooks/usePriceFormat";

type DisplayColumnDataProps = {
  data: {
    id: number;
    key: string;
    title: string;
    price: number;
    description?: string;
    shortDescription?: string;
    includes: {
      id: number;
      text: string;
    }[];
  }[];
  style: CSSModuleClasses;
  isColumnLarge?: boolean;
};

export const DisplayColumnData = ({
  data,
  style,
  isColumnLarge = true,
}: DisplayColumnDataProps) => {
  const { formatPrice } = usePriceFormat();
  return (
    <>
      {data.map((item) => (
        <div
          className={
            isColumnLarge
              ? `${style.web_services_desc_column_large}`
              : `${style.web_services_desc_column_mid}`
          }
          data-color={item.key}
          key={item.id}
        >
          <div className={style.web_services_desc_header}>
            <div className={style.header_price}>
              <h3>{item.title}</h3>
              <div className={style.price}>
                <span>único pago</span>
                <p>{formatPrice(item.price)}</p>
                <span>mxn</span>
              </div>
            </div>
          </div>
          {item.description && (
            <div className={style.pack_description}>
              <p>{item.description}</p>
            </div>
          )}
          <div className={style.details_list}>
            {item.includes.map((item) => (
              <ul key={item.id}>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {item.text}
                </li>
              </ul>
            ))}
          </div>
          {item.shortDescription && (
            <div className={style.short_desc}>
              <p>{item.shortDescription}</p>
            </div>
          )}
          <div className={style.quote_button}>
            <button>Cotizar</button>
          </div>
        </div>
      ))}
    </>
  );
};
