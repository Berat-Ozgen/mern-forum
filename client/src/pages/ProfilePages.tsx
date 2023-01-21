import { useEffect, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionsCont from "../components/question";
import { useAppDispatch, useAppSelector } from "../reduxHooks/storeHook";
import { getAUsersPage } from "../reduxSlice/fetchSlice/getAUsers";
import { getSelfUsersPost } from "../reduxSlice/fetchSlice/getSelfUsersPosts";
import { handleDeletedPost } from "../reduxSlice/fetchSlice/postDeletedSlice";

const ProfilePages: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { userInformation } = useAppSelector((state) => state.usersData);
  const { getSelfPostData } = useAppSelector(
    (state) => state.getSelfUsersPostsSlice
  );
  const { getAUsersPageData } = useAppSelector((state) => state.getAUsersSlice);

  const { username } = useParams();

  const dispatch = useAppDispatch();

  const deletePost = {
    userId: userInformation?._id as string,
  };
  const handleDelete = async (id: string) => {
    dispatch(handleDeletedPost({ id, deletePost }));
  };

  useEffect(() => {
    dispatch(getAUsersPage(username as string));
    dispatch(getSelfUsersPost(username as string));
  }, [username]);

  const handlePagePost = (id: string) => {
    navigate(`/questionpage/${id}`);
  };

  if (!userInformation) {
    return (
      <div className="w-full text-7xl flex items-center justify-center bg-gray-900">
        Lütfen Giriş yapınız
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-gray-900">
      <div className="flex flex-1 flex-col justify-evenly items-center">
        <div>
          <img
            className="w-36 h-36 rounded"
            src="https://picsum.photos/200/305"
            alt="Default avatar"
          />
        </div>
        <div className="text-green-200 text-rubik-bubbles text-4xl">
          {getAUsersPageData?.username?.toUpperCase()}
        </div>
        <div className="text-green-200 text-lg">
          Türkiyede yaşıyorum javascirpt react typescript ile ugraşıyorum
        </div>
      </div>
      <div className="flex flex-1 flex-col  items-center  justify-evenly">
        {getSelfPostData?.length > 0 ? (
          getSelfPostData?.map((item: any) => (
            <QuestionsCont
              key={item._id}
              handlePagePost={handlePagePost}
              name={item.username}
              img={item.img || "https://picsum.photos/id/237/200/300"}
              question={item.des}
              userId={item.userId}
              id={item._id}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="text-6xl text-gray-500  w-full flex items-center justify-center">
            Hiç bir soru sormamışsın
          </div>
        )}
      </div>
      <div className="flex flex-1">3</div>
    </div>
  );
};

export default ProfilePages;
