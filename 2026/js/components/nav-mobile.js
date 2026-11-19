document.getElementById('nav-mobile').innerHTML=`

<ul>
    <li class="menu_item_mobile"><a href="index.html" aria-label="home">Home</a></li>
    <li class="menu_item_mobile"><a href="CFP.html">Call for Papers</a></li>
    <li class="menu_item_mobile"><a href="organizers.html">Organizers</a></li>
    <li class="menu_item_mobile"><a href="accepted-papers.html">Accepted Papers</a></li>
    <li class="menu_item_mobile"><a href="program.html">Program</a></li>
    <li class="menu_item_mobile">
        <select aria-label="Workshop year" onchange="window.location.href = this.value">
            <option value="../index.html">2027</option>
            <option value="index.html" selected>2026</option>
            <option value="../2025/index.html">2025</option>
            <option value="../2024/index.html">2024</option>
            <option value="../2023/index.html">2023</option>
            <option value="../2022/index.html">2022</option>
            <option value="../2021/index.html">2021</option>
            <option value="../2020/index.html">2020</option>
        </select>
    </li>
</ul>

`;
