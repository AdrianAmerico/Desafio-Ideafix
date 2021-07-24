import connection from "../connection";

const taskValidade = async (id: Number): Promise<boolean> => {
  const response = await connection("Notes").where({ id });

  if (response[0] === undefined ||  response[0].length === 0 ) {
    return true;
  } else {
    return false;
  }
};

export default taskValidade;
