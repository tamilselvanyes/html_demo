import { useEffect, useState } from "react";
import { API } from "./global";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";

export function UrlDetails() {
  const [urlList, setUrlList] = useState(null);

  const getUrlList = () => {
    fetch(`${API}/urlList`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setUrlList(result);
        console.log(result);
      });
  };

  useEffect(() => {
    getUrlList();
  }, []);

  return (
    <div className="table-complete">
      {urlList ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Url</th>
              <th>Short Url</th>
              <th>Click Count</th>
            </tr>
          </thead>
          <tbody>
            {urlList.map((item, index) => (
              <UrlTable key={index} index={index} item={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>No urls added till now...</div>
      )}
    </div>
  );

  function UrlTable({ item, index }) {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.full_url}</td>
        <td>
          {item.new_url}
          <Button
            onClick={() => navigator.clipboard.writeText(`${item.new_url}`)}
          >
            <ContentCopyIcon />
          </Button>
        </td>
        <td>{item.clicks}</td>
      </tr>
    );
  }
}
