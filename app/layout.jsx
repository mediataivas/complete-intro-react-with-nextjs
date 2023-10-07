import "./style.css";
import Link from "next/link";

export default function (props) {
  return (
    <html>
      <body>
        <header>
          <Link href="/">Adopt Me!</Link>
        </header>

        <div>{props.children}</div>
      </body>
    </html>
  );
}
