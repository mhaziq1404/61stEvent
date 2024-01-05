import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}></Image>
        </Link>

        <p>2024 61stEvent. All right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer