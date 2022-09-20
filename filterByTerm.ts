// the new label
type ILinks = Array<ILink>;
// the new label

function filterByTerm(
  input: ILinks,
  searchTerm: string,
  lookupKey: string = "url"
): ILinks {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex);
  });
}

const obj1: ILink = { url: "string1" };
const obj2: ILink = { url: "string2" };
const obj3: ILink = { url: "string3" };

const arrOfLinks: ILinks = [obj1, obj2, obj3];

filterByTerm(arrOfLinks, "string3");

