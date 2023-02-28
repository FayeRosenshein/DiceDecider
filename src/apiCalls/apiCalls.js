const getClasses = async () => {
  const url = "https://www.dnd5eapi.co/api/classes/";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};

export default  getClasses 
