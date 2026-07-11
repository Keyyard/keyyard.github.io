// ─── RESEARCH ────────────────────────────────────────────────
// Single source of truth for published research. Previously duplicated between
// the "Researcher" skill card and the "Credentials & Awards" list, which had
// to be edited in two places. Both are now derived from this array.
export interface ResearchPaper {
  // Long title used in the Credentials & Awards list
  title: string;
  // Short label used on the Researcher skill card
  cardName: string;
  category: string;
  // Full venue/detail line for the Credentials list
  detail: string;
  // Condensed note for the Researcher card
  cardNote: string;
  date: string;
  link: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    title:
      "Productivitism: Embedding Behavioral Psychology into Productivity App Design",
    cardName: "Embedding Behavioral Psychology in App Design",
    category: "Published Research",
    detail:
      "Proc. 22nd International Conference on Socio-Economic & Environmental Issues in Development · ISBN 978-604-79-5848-1 · pp. 4441–4449",
    cardNote: "Int'l conference proceedings · pp. 4441–4449",
    date: "2026",
    link: "https://khoahoc.neu.edu.vn/Resources/Docs/SubDomain/khoahoc/h%E1%BB%99i%20th%E1%BA%A3o/qu%C3%B4c%20t%E1%BA%BF/KhonKaen_9.5.2019/2026/Part3_(session%209%20-%20session%2011).pdf",
  },
  {
    title:
      "Integrating Pixel Aesthetics & Behavioral Psychology in Productivitism",
    cardName: "Pixel Aesthetics and Behavioral Psychology in App Development",
    category: "Published Research",
    detail:
      "Faculty of IT, National Economics University · by Trịnh Minh Hiếu (Keyyard)",
    cardNote: "NEU Faculty of IT · N=381 user study",
    date: "Mar 2026",
    link: "https://fit.neu.edu.vn/post/tich-hop-giao-dien-tham-my-pixel-va-tam-ly-hoc-hanh-vi-trong-phat-trien-phan-mem-productivitism-nham-nang-cao-nang-suat-va-giam-qua-tai-nhan-thuc-cho-nguoi-dung",
  },
];
