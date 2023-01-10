import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Title 1",
      content: "Content 1",
    },
    {
      id: "2",
      label: "Title 2",
      content: "Content 2",
    },
    {
      id: "3",
      label: "Title 3",
      content: "Content 3",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
