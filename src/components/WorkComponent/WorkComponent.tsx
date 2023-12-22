import { FC, useContext } from "react";
import "./WorkComponent.scss";
import { ApiContext } from "../../context/apiContext";

interface IWorkComponent {
  data: WorkItemData;
  buttonHref: string;
}

export const WorkComponent: FC<IWorkComponent> = (props) => {
  const { data, buttonHref }: IWorkComponent = { ...defaultProps, ...props };
  const api = useContext(ApiContext).api;

  return (
    <div className="content__card shadow--md">
      <div className="card__image">
        <img src={`${api}/assets/${data.imageFileName}`} />
      </div>
      <div className="card__content">
        <div className="wrapper">
          <span className="card__heading subtitle--semi-bold">
            {data.subtitle}
          </span>
          <p className="card__info body-2--normal">{data.description}</p>
          <ul className="card__skills">
            {data.technologies.map((skill: string, index) => (
              <li key={index} className="skills__tag">
                <span className="tag__text body-3--medium">{skill}</span>
              </li>
            ))}
          </ul>
          <a href={buttonHref} className="card__icon icon__button">
            <img src="./assets/images/link_ico.svg" alt="Ссылка" />
          </a>
        </div>
      </div>
    </div>
  );
};

const defaultProps: Required<IWorkComponent> = {
  data: {
    imageFileName: "",
    subtitle: "",
    description: "",
    technologies: [],
  },
  buttonHref: "",
};
