export default function Content({ children }) {
    //main의 className="w-[ ??? px]" main 레이아웃 너비를 지정
    return (
        <main className="mx-auto w-[1600px] min-h-[67.5rem]">
            <div className="py-4  h-full">
                <div className="bg-emerald-100 h-full">{children}</div>
            </div>
        </main>
    );
}
