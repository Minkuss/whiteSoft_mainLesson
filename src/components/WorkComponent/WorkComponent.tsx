import { FC } from "react";
import "./WorkComponent.scss";

interface IWorkComponent {
  data: worksData;
}

export const WorkComponent: FC<IWorkComponent> = (props) => {
  const { data }: IWorkComponent = { ...defaultProps, ...props };

  return (
    <div className="content__card shadow--md">
      <div className="card__image">
        <img src={data.card__image} />
      </div>
      <div className="card__content">
        <div className="wrapper">
          <span className="card__heading subtitle--semi-bold">
            {data.card__heading}
          </span>
          <p className="card__info body-2--normal">{data.card__info}</p>
          <ul className="card__skills">
            {data.card__skills.map((skill: string) => (
              <li
                key={data.card__skills.indexOf(skill)}
                className="skills__tag"
              >
                <span className="tag__text body-3--medium">{skill}</span>
              </li>
            ))}
          </ul>
          <a href={data.href} className="card__icon icon__button">
            <img src="./assets/images/link_ico.svg" alt="Ссылка" />
          </a>
        </div>
      </div>
    </div>
  );
};

const defaultProps: Required<IWorkComponent> = {
  data: {
    card__image: "",
    card__heading: "",
    card__info: "",
    card__skills: [],
    href: "",
  },
};
