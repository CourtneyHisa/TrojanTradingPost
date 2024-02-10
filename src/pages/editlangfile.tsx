import { api } from "~/utils/api";
import * as lang from "../../public/lang/en_US.json";

export default function editLangFile() {
  // get keynames of objects, json: { key: value, key: value, •••};
  const keys = Object.keys(lang).filter(k=>k!=="default");

  const editLangFile = api.test.editLang.useMutation({
    onSuccess() {
      alert("Successfully edited lang file");
    },
    onError() {
      alert("Your site is broken");
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // idk what this does
    event.preventDefault();
    const langCopy: Record<string,string> = {};
    for(const key of keys)
        // create a new lang object using the values that the user gave to us.
        langCopy[key] = (document.getElementById(key) as HTMLInputElement).value;
    if(JSON.stringify(lang) === JSON.stringify(langCopy)) {
        // if its all the same then dont do anything
        alert("Bro");
    } else {
        // send request with the whole json file probably bad if the file will get very big
        editLangFile.mutate(langCopy);
    }
  }

  return (
    <>
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          {(keys as (keyof typeof lang)[]).map((k) => (
            // for test sake, set the id &placeholder to the lang key then set value to the value found in the lang file
            (<>
            <div>{k}</div>
            <input className="bg-slate-500" id={k} type="text" placeholder={k} defaultValue={lang[k]}/>
            </>)
          ))}
          <input
            id="editlangsubmit"
            type="submit"
            className="bg-red-500"
            value={"Change lang file now"}
          ></input>
        </form>
      </div>
    </>
  );
}
