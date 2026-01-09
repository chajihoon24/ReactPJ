export function DevGridOverlay({ visible, onToggle }) {
    if (!visible) return null;

    return (
        <div className="">
            <button
                onClick={onToggle}
                className="absolute top-4 right-4 z-120 px-3 py-1 bg-gray-800 text-white text-sm rounded-md"
            >
                Grid
            </button>
            <GridGuide12 />
        </div>
    );
}

export function GridGuide12() {
    return (
        <div className="flex gap-4 z-100 h-full w-full absolute text-white border-dashed border-gray-400 border-2">
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                1
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                2
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                3
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                4
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                5
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                6
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                7
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                8
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                9
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                10
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                11
            </div>
            <div className="bg-red-400/10 flex-1 flex items-center justify-center">
                12
            </div>
        </div>
    );
}
