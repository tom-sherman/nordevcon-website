export function parseSponsors(data) {
  let elite = getPackages(data, "Elite");
  let partner = getPackages(data, "Partner");
  let associate = getPackages(data, "Associate");

  return [elite, partner, associate];
}

/**
 * Maps fields prop to entries, and then filter by type
 *
 * @param array data
 * @param string type
 * @return array
 */
export function getPackages(data, type) {
  return data
    .map((entity) => entity.fields)
    .filter((entity) => entity.Live)
    .filter((entity) => entity.Package === type);
}
