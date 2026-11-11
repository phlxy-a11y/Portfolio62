/**
 * ฟังก์ชันสำหรับสลับแท็กการแสดงผล Portfolio ระหว่างนักเรียนแต่ละคน
 * @param {Event} evt - เหตุการณ์การคลิกปุ่ม (Event object)
 * @param {string} tabName - ID ของส่วนเนื้อหาที่ต้องการแสดงผล
 */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // ซ่อนเนื้อหา Portfolio ทั้งหมดก่อน
    tabcontent = document.getElementsByClassName("portfolio-section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // ลบสถานะ active ออกจากปุ่มเมนูทั้งหมด
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // แสดงเนื้อหาของแท็กที่ถูกเลือก และเพิ่มสถานะ active ให้ปุ่มที่คลิก
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
