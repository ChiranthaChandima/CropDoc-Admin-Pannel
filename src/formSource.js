export const userInputs = [
    {
      id: "dname",
      label: "Disease Name",
      type: "text",
      placeholder: "",
    },
    {
      id: "dnumber",
      label: "Disease Number",
      type: "number",
      placeholder: "",
    },
    {
      id: "dcase",
      label: "Disease Cause",
      type: "test",
      placeholder: "",
    },
    
  ];

  export const diseaseInputs = [
    {
      id: "dname",
      label: "Disease Name",
      type: "text",
      placeholder: "",
    },
    {
      id: "dnumber",
      label: "Disease Number",
      type: "number",
      placeholder: "",
    },
    {
      id: "dcase",
      label: "Disease Cause",
      type: "text",
      placeholder: "",
    },
    
  ];

  export const treatmentInputs = [
    {
      id: "dname",
      label: "Disease Name",
      type: "select",
      placeholder: "",
      options: sessionStorage?.getItem("disease") ? JSON.parse(sessionStorage?.getItem("disease"))?.map(item => item?.dname) : []
    },
    {
      id: "cause",
      label: "Cause",
      type: "text",
      placeholder: "",
    },
    {
      id: "tname",
      label: "Treatment Name",
      type: "text",
      placeholder: "",
    },
    
  ];
  
  export const productInputs = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Apple Macbook Pro",
    },
    {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Computers",
    },
    {
      id: 4,
      label: "Price",
      type: "text",
      placeholder: "100",
    },
    {
      id: 5,
      label: "Stock",
      type: "text",
      placeholder: "in stock",
    },
  ];
  