const GiftPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Gift Page for gift ID: {id}</div>;
};

export default GiftPage;
