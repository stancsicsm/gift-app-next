const GiftPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Gift Page for gift ID: {id}</div>;
};

export default GiftPage;
