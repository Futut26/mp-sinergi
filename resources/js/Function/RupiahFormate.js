export function formatToRupiah(angka) {
    if (!angka) return "";
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseFromRupiah(rupiah) {
    if (!rupiah) return 0;
    return parseInt(rupiah.replace(/\./g, ""), 10);
}
