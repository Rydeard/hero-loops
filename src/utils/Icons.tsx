export default abstract class Icons {

    public static chat =
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>

    public static clock = Icons.clock_custom("white")

    public static clock_custom(color: string) {
        return <svg height="24" width="24" color={color} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    }

    public static repeat = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>

    public static hiking = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: 35, width: 35 }}><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g transform="translate(0,0)"><path d="M185 58.59c-15-.38-30 13.1-33.1 33.43-3.3 21.68 8.8 39.98 24.8 42.38 16 2.4 32.9-11.5 36.1-33.2 3.3-21.72-8.7-39.94-24.8-42.35-1-.15-2-.24-3-.26zm113.3 77.21l-17.2 5.2 8.3 28.1 18.9.5zm-144.6 7.6c-2.7 70.5-.4 140.9-3.6 202.5-15.8 35.8-36.7 70.2-50.38 99.2l25.68 12.4c20.8-33.7 42.2-68 55.2-102.9l11.3-63.4 53 45.9 16.2 88.1 29.3-5.8-17.6-100.6-58.1-53.6-9.3-86.4 48.1 31.3c26.7.9 45.1-1.9 69.6-5.7l1-16.3-70.8-2.1-46.5-42c-9.5 6.7-20.9 10-32.8 8.2-7.7-1.2-14.5-4.3-20.3-8.8zm-16.6 13l-40.47 11.7-5.96 85.5c13.53 6.7 31.03 11.6 43.23 3.4zm352.7 65.3l-95.7 78.1-32 51.9L324 222.5c-6.3.9-12.2 1.8-18 2.6l43.5 147.1-22.6 36.7-19.4 3.4 3.7 21.3-64.5 12.8-4.2-22.7-84.3 14.8c-9.5 15.6-17.1 27.9-26 42.2l-49.52-23.9-62.64 34.8H489.8z" fill="#000000" fill-opacity="1"></path></g></svg>
    public static hiking_category = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: 70, width: 70 }}><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g transform="translate(0,0)"><path d="M185 58.59c-15-.38-30 13.1-33.1 33.43-3.3 21.68 8.8 39.98 24.8 42.38 16 2.4 32.9-11.5 36.1-33.2 3.3-21.72-8.7-39.94-24.8-42.35-1-.15-2-.24-3-.26zm113.3 77.21l-17.2 5.2 8.3 28.1 18.9.5zm-144.6 7.6c-2.7 70.5-.4 140.9-3.6 202.5-15.8 35.8-36.7 70.2-50.38 99.2l25.68 12.4c20.8-33.7 42.2-68 55.2-102.9l11.3-63.4 53 45.9 16.2 88.1 29.3-5.8-17.6-100.6-58.1-53.6-9.3-86.4 48.1 31.3c26.7.9 45.1-1.9 69.6-5.7l1-16.3-70.8-2.1-46.5-42c-9.5 6.7-20.9 10-32.8 8.2-7.7-1.2-14.5-4.3-20.3-8.8zm-16.6 13l-40.47 11.7-5.96 85.5c13.53 6.7 31.03 11.6 43.23 3.4zm352.7 65.3l-95.7 78.1-32 51.9L324 222.5c-6.3.9-12.2 1.8-18 2.6l43.5 147.1-22.6 36.7-19.4 3.4 3.7 21.3-64.5 12.8-4.2-22.7-84.3 14.8c-9.5 15.6-17.1 27.9-26 42.2l-49.52-23.9-62.64 34.8H489.8z" fill="#000000" fill-opacity="1"></path></g></svg>

    public static castle_category = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: 70, width: 70 }}><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g transform="translate(0,0)"><path d="M255.95 27.11L180.6 107.614l150.7 1.168-75.35-81.674h-.003zM25 109.895v68.01l19.412 25.99h71.06l19.528-26v-68h-14v15.995h-18v-15.994H89v15.995H71v-15.994H57v15.995H39v-15.994H25zm352 0v68l19.527 26h71.06L487 177.906v-68.01h-14v15.995h-18v-15.994h-14v15.995h-18v-15.994h-14v15.995h-18v-15.994h-14zm-176 15.877V260.89h110V126.63l-110-.857zm55 20.118c8 0 16 4 16 12v32h-32v-32c0-8 8-12 16-12zM41 221.897V484.89h78V221.897H41zm352 0V484.89h78V221.897h-78zM56 241.89c4 0 8 4 8 12v32H48v-32c0-8 4-12 8-12zm400 0c4 0 8 4 8 12v32h-16v-32c0-8 4-12 8-12zm-303 37v23h-16v183h87v-55c0-24 16-36 32-36s32 12 32 36v55h87v-183h-16v-23h-14v23h-18v-23h-14v23h-18v-23h-14v23h-18v-23h-14v23h-18v-23h-14v23h-18v-23h-14v23h-18v-23h-14zm-49 43c4 0 8 4 8 12v32H96v-32c0-8 4-12 8-12zm72 0c8 0 16 4 16 12v32h-32v-32c0-8 8-12 16-12zm80 0c8 0 16 4 16 12v32h-32v-32c0-8 8-12 16-12zm80 0c8 0 16 4 16 12v32h-32v-32c0-8 8-12 16-12zm72 0c4 0 8 4 8 12v32h-16v-32c0-8 4-12 8-12zm-352 64c4 0 8 4 8 12v32H48v-32c0-8 4-12 8-12zm400 0c4 0 8 4 8 12v32h-16v-32c0-8 4-12 8-12z" fill="#000000" fill-opacity="1"></path></g></svg>
    public static settings = <svg width="35" height="35" color="grey" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    public static chevron_up = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>

    public static chevron_down = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>

    public static chevron_left = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>

    public static chevron_right = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>

    public static plus = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>

    public static minus = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>

    public static duplicate = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>

    public static x = <svg style={{ height: 25, width: 25 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
}