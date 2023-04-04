export const getToken = async () => {
    const tokenRes = await fetch(
      "https://drwhm1ofhh.execute-api.ap-south-1.amazonaws.com/qa/api/v1/auth/guest",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "no-cors",
          ip: "1696313264460",
          os: "Windows",
          version: "1.1",
        }),
      }
    );
    const jsonToken = await tokenRes.json();
    const finalToken = await jsonToken?.data?.guestToken;
    return finalToken
  }
  
export const getPreview = async (id, finalToken) => {
    const res = await fetch(
      `https://3mxtu0s5yl.execute-api.ap-south-1.amazonaws.com/qa/api/v1/web/hoote/${id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${finalToken}` },
      }
    );
    return res;
  };