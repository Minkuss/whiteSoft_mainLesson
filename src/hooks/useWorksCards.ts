import axios from "axios";
import { useEffect, useState } from "react";

export function useWorksCards(api: string) {
  const [cards, setCards] = useState<WorkData>({
    title: "",
    shortDescription: "",
    items: []
  });

  const getCards = async () => {
    await axios.get(api + "/work").then((resp) => {
      console.log(resp.data);
      setCards(resp.data);
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getCards();
  }, [setCards])

  return cards;
}