import { FC } from "react";
import "./TestimonialsSection.scss";

export const TestimonialsSection: FC = () => {
  return (
    <section id="testimonials" className="testimonials container">
      <div className="testimonials__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Testimonials</h2>
          <p className="text__p subtitle--normal">
            Nice things people have said about me:
          </p>
        </div>
        <div className="content__cards">
          <div className="testimonial__card shadow--md">
            <div className="card__heading">
              <img
                loading="lazy"
                className="card__logo"
                src="./assets/images/sarah__testimonial.png"
              />
              <div className="card__details">
                <h3 className="details__h3 heading-3--semi-bold">Sarah</h3>
                <span className="details__span subtitle--normal">
                  Frontend Developer
                </span>
              </div>
            </div>
            <p className="card__info body-2--normal">
              “I had the opportunity to see a Capibarara at the zoo, and it was
              such an incredible experience! They are such gentle creatures and
              so fascinating to watch. Their size and calm nature definitely
              make them unique among other animal species.”
            </p>
          </div>
          <div className="testimonial__card shadow--md">
            <div className="card__heading">
              <div className="card__details">
                <p className="details__parag">
                  <span className="name subtitle--semi-bold">Jason</span>
                  <span className="prof body-3--normal">/&nbsp;Manage</span>
                </p>
              </div>
            </div>
            <p className="card__info hidden body-2--normal">
              “I recently read about Capybarara and I must say, they are truly
              fascinating animals. Their social behavior and close-knit family
              structures are so interesting, and I love how they live in such
              harmony with other animals in their habitats. Definitely one of
              the most underrated animals out there!”
            </p>
          </div>
          <div className="testimonial__card shadow--md">
            <div className="card__heading">
              <div className="card__details">
                <p className="details__parag">
                  <span className="name subtitle--semi-bold">Emma</span>
                  <span className="prof body-3--normal">
                    /&nbsp;Backend&nbsp;Developer
                  </span>
                </p>
              </div>
            </div>
            <p className="card__info hidden body-2--normal">
              “I had the chance to interact with a Capybarara at a wildlife
              sanctuary, and it was such a memorable experience. They are
              extremely friendly and affectionate. I was surprised by how
              intelligent they are, and their level of comfort with humans. I
              would highly recommend anyone to see them up close!:”
            </p>
          </div>
          <div className="testimonial__card shadow--md">
            <div className="card__heading">
              <div className="card__details">
                <p className="details__parag">
                  <span className="name subtitle--semi-bold">Megan</span>
                  <span className="prof body-3--normal">/&nbsp;DevOps</span>
                </p>
              </div>
            </div>
            <p className="card__info hidden body-2--normal">
              “As an animal lover, I've always been fascinated by Capybarara.
              They are super social creatures and thrive in groups. It's amazing
              how they have adaptations that allow them to live both on land and
              in water. Their unique appearance and laid-back personality make
              them the perfect animal to admire!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
