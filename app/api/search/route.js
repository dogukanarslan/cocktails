import { BASE_URL } from '../../../constants';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('s');

  const res = await fetch(`${BASE_URL}/search.php/?s=${name}`);
  const data = await res.json();

  return Response.json(data);
};
