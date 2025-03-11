export default function Post({ id, title, content, authorName }) {
  return (
    <div className=" border border-gray-700 rounded-xl p-3.5 max-w-[200px] ">
      <h3 className=" font-bold text-gray-400"> {authorName} </h3>
      <h4 className=" font-extrabold  underline">{title}</h4>
      <p>{content} </p>
    </div>
  );
}
