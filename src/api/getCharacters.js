export const getThreeCharacters = async () => {
  try {
    let response = await (
      await fetch(`https://rickandmortyapi.com/api/character/1,2,183`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (response.length === 0) {
      return null;
    }

    return response;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
