import { BASE_URL } from '../../../../constants';

export const GET = async (request, context) => {
  const { name } = context.params;

  const res = await fetch(`${BASE_URL}/search.php/?s=${name}`);
  const data = await res.json();

  return Response.json(data);
};
