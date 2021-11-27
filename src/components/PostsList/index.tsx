import { List, Datagrid, TextField } from "react-admin";

const PostList = (props: any) => {
  return (
    <List {...props}>
      <>
        <Datagrid key="title">
          <TextField source="title" label="Titolo" />
          <TextField source="author" label="Autore" />
        </Datagrid>
      </>
    </List>
  );
};

export default PostList;
