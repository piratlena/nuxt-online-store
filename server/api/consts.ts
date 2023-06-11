export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=miuqBj6m4SX1UgBNgGb0x9sz8Pn01Qfa9nLUc87s"
  );
  return data;
});
