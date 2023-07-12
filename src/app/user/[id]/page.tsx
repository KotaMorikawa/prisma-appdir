import UserContainer from "@/components/User/UserContainer";

const getUser = async (id: string) => {
  return await fetch(`http://localhost:3000/api/user/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());
};

const page = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id);

  return <UserContainer user={user} />;
};

export default page;
