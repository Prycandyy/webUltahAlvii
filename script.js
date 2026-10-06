        alert("HIHELLOWWW BEBEEEE YAAARRRR");
        alert("u know mee? ofcourseee wkwkwkwkw");
        alert("cringe cokkk gilaa leii");
        let password = prompt("etsss password duluu bosskuhh");

        while (password !== "aiw") {
            alert("password ddapa dimana ksiang ini weii, salah coiiii");
            alert("WKWKWKKWKWKKWKKWK");
            alert("nda katuuu, begini beginii");
            alert("depe pass, npe inisial nama pake huruf kecil");
            alert("contoh klo kita berarti depe pass 'pcim'");
            alert("mangartikaannnn?? klo nnda, ba tanya pa gue yappp. okee lanjutttt");
            password = prompt("password passwordd");
        }
        alert("nahh benarrr");
        alert("AREEEE YOUUUU READYYY KIDSSS????");
        alert("OKEEE COME ONN LETSSSGOOOWWW");

/* -------------------------------------------------------------
           1. CANVAS HEART PARTICLES ANIMATIONS (3 VERSIONS)
        ------------------------------------------------------------- */
        const canvas = document.getElementById('heartCanvas');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        let particles = [];
        let heartMode = 1; // 1: Glowing Particle Heart, 2: Sparkle Fountain, 3: Neon Heart Outline

        // Heart Parametric Equation Helper
        function getHeartPoint(t) {
            // Heart formula: x = 16*sin^3(t), y = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)
            const scale = Math.min(width, height) / 38;
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
            return {
                x: width / 2 + x * scale,
                y: height / 2.2 + y * scale
            };
        }

        class HeartParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.t = Math.random() * Math.PI * 2;
                const pos = getHeartPoint(this.t);
                
                if (heartMode === 1) { // Glowing Heart Density
                    this.x = pos.x + (Math.random() - 0.5) * 35;
                    this.y = pos.y + (Math.random() - 0.5) * 35;
                    this.vx = (Math.random() - 0.5) * 0.8;
                    this.vy = (Math.random() - 0.5) * 0.8;
                    this.size = Math.random() * 2.5 + 1;
                    this.alpha = Math.random() * 0.8 + 0.2;
                } else if (heartMode === 2) { // Fountain Particles
                    this.x = width / 2 + (Math.random() - 0.5) * 40;
                    this.y = height + 10;
                    this.vx = (Math.random() - 0.5) * 3;
                    this.vy = -(Math.random() * 4 + 3);
                    this.size = Math.random() * 3 + 1.5;
                    this.alpha = 1;
                } else if (heartMode === 3) { // Sharp Neon Heart Contour
                    this.x = pos.x;
                    this.y = pos.y;
                    this.vx = (Math.random() - 0.5) * 0.2;
                    this.vy = (Math.random() - 0.5) * 0.2;
                    this.size = Math.random() * 2 + 1;
                    this.alpha = Math.random() * 0.9 + 0.1;
                }

                // Pastel Cyan / Blue / Violet colors
                const colors = ['#38BDF8', '#BAE6FD', '#C084FC', '#F472B6', '#60A5FA'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.sparkle = Math.random() * 0.05 + 0.01;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (heartMode === 1 || heartMode === 3) {
                    this.alpha += Math.sin(Date.now() * this.sparkle) * 0.03;
                    if (this.alpha <= 0 || this.alpha >= 1) this.sparkle = -this.sparkle;
                } else if (heartMode === 2) {
                    this.alpha -= 0.008;
                    if (this.alpha <= 0) this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 12;
                ctx.shadowColor = this.color;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        function initParticles(count = 350) {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new HeartParticle());
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animateCanvas);
        }

        function changeHeartMode(mode) {
            heartMode = mode;
            initParticles(mode === 3 ? 450 : 350);

            // Update UI Switcher Buttons
            [1, 2, 3].forEach(m => {
                const btn = document.getElementById(`modeBtn${m}`);
                if (m === mode) {
                    btn.className = "px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-sky-500 text-white shadow-sm";
                } else {
                    btn.className = "px-3 py-1.5 rounded-full text-xs font-bold transition-all text-sky-700 hover:bg-sky-100";
                }
            });
        }

        /* -------------------------------------------------------------
           2. COUNTDOWN TIMER LOGIC (TARGET: OCTOBER 7)
        ------------------------------------------------------------- */
        // function initCountdown() {
        //     function updateTimer() {
        //         const now = new Date();
        //         let currentYear = now.getFullYear();
                
        //         // Target Date: 7th October
        //         let targetDate = new Date(currentYear, 9, 7, 0, 0, 0);

        //         if (now > targetDate && now.getDate() !== 7) {
        //             targetDate = new Date(currentYear + 1, 9, 7, 0, 0, 0);
        //         }

        //         const diff = targetDate - now;

        //         if (now.getMonth() === 9 && now.getDate() === 7) {
        //             document.getElementById('countdownTimer').classList.add('hidden');
        //             document.getElementById('birthdayTodayMsg').classList.remove('hidden');
        //             return;
        //         }

        //         if (diff > 0) {
        //             const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        //             const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        //             const mins = Math.floor((diff / (1000 * 60)) % 60);
        //             const secs = Math.floor((diff / 1000) % 60);

        //             document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
        //             document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
        //             document.getElementById('cd-mins').innerText = String(mins).padStart(2, '0');
        //             document.getElementById('cd-secs').innerText = String(secs).padStart(2, '0');
        //         }
        //     }
        //     updateTimer();
        //     setInterval(updateTimer, 1000);
        // }

        /* -------------------------------------------------------------
           3. UNLOCK SURPRISE GATE
        ------------------------------------------------------------- */
        function openSurpriseGate() {
            const lockScreen = document.getElementById('lockScreen');
            const mainContent = document.getElementById('mainContent');
            const musicWidget = document.getElementById('musicWidget');

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#38BDF8', '#BAE6FD', '#C084FC', '#FCE7F3']
            });

            initAndPlayAudio();

            lockScreen.classList.add('opacity-0', '-translate-y-full');
            setTimeout(() => {
                lockScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                setTimeout(() => {
                    mainContent.classList.remove('opacity-0');
                    musicWidget.classList.remove('hidden');
                }, 50);
                startTypewriter();
            }, 700);
        }

        /* -------------------------------------------------------------
           4. AUDIO PLAYER SYNTH / CHILL TUNE (WEB AUDIO API)
        ------------------------------------------------------------- */
        let audioCtx = null;
        let isPlaying = false;
        let synthInterval = null;

        function initAndPlayAudio() {
            if (isPlaying) return;
            
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContext();

                const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
                let noteIndex = 0;

                function playNextNote() {
                    if (!audioCtx || audioCtx.state === 'suspended') {
                        audioCtx.resume();
                    }
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();

                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(notes[noteIndex % notes.length], audioCtx.currentTime);

                    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

                    osc.connect(gain);
                    gain.connect(audioCtx.destination);

                    osc.start();
                    osc.stop(audioCtx.currentTime + 1.2);

                    noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % notes.length;
                }

                synthInterval = setInterval(playNextNote, 600);
                isPlaying = true;
                updateAudioUI(true);
            } catch (e) {
                console.log('Web Audio API:', e);
            }
        }

        function toggleAudio() {
            if (isPlaying) {
                if (synthInterval) clearInterval(synthInterval);
                isPlaying = false;
                updateAudioUI(false);
            } else {
                initAndPlayAudio();
            }
        }

        function updateAudioUI(playing) {
            const vinyl = document.getElementById('vinylIcon');
            const icon = document.getElementById('playPauseIcon');
            const status = document.getElementById('musicStatusText');

            if (playing) {
                vinyl.classList.add('animate-spin-slow');
                icon.className = 'fa-solid fa-pause text-sm';
                status.innerText = 'Sedang Diputar 🎵';
            } else {
                vinyl.classList.remove('animate-spin-slow');
                icon.className = 'fa-solid fa-play text-sm';
                status.innerText = 'Dihentikan';
            }
        }

        /* -------------------------------------------------------------
           5. VIRTUAL CANDLE BLOW LOGIC
        ------------------------------------------------------------- */
        let isCandleBlown = false;

        function blowCandle() {
            if (isCandleBlown) return;

            const flame = document.getElementById('candleFlame');
            const smoke = document.getElementById('candleSmoke');
            const status = document.getElementById('candleStatus');
            const blowBtn = document.getElementById('blowBtn');

            flame.classList.add('scale-0', 'opacity-0');
            smoke.classList.remove('hidden');

            isCandleBlown = true;
            status.innerText = '✨ YARRR! Lilin Berhasil Ditiup! \n \n Apapun itu yang nn doakan selagi hal baik, maka kita mengaminkan.';
            blowBtn.innerText = 'Yeay, Happy Birthdayy Opeettttt! 🎉';
            blowBtn.classList.replace('from-sky-400', 'from-emerald-400');
            blowBtn.classList.replace('to-indigo-500', 'to-teal-500');

            const duration = 3 * 1000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#38BDF8', '#BAE6FD', '#FCE7F3', '#C084FC']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#38BDF8', '#BAE6FD', '#FCE7F3', '#C084FC']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }

        /* -------------------------------------------------------------
           6. TYPEWRITER LETTER EFFECT
        ------------------------------------------------------------- */
        const letterText = "Selamat Ulang Tahun yang kesekian kalinya tase ucapan for nn yar! 🎂✨ Nda ada hal yang kita harapkan selain mendoakan nn semoga bahagia, sehat bahkan nanti boleh sukses🌻 Akhir-akhir ini kita sadiki sedih karena torang so jarang komunikasi, mar disisi laeng kt bersyukur karena meski jarang komunikasi mar Tuhan selia klo torang bisa tetap nyambung, dan ta berharap begini terus. So nda mo banyak-banyak mo bilang, mar makasi so jadi tampa yang kita bisa setunjung apapun tanpa tako modi judge. I hope the same love is always in our hearts. Happy Birthday!";

        let letterIndex = 0;
        let typewriterTimeout = null;

        function startTypewriter() {
            const container = document.getElementById('typewriterText');
            if (letterIndex < letterText.length) {
                container.innerHTML += letterText.charAt(letterIndex);
                letterIndex++;
                typewriterTimeout = setTimeout(startTypewriter, 35);
            }
        }

        function restartTypewriter() {
            if (typewriterTimeout) clearTimeout(typewriterTimeout);
            document.getElementById('typewriterText').innerHTML = '';
            letterIndex = 0;
            startTypewriter();
        }

        /* -------------------------------------------------------------
           7. REASONS WHY YOU'RE AMAZING CARDS
        ------------------------------------------------------------- */
        const reasonsData = [
            { icon: 'fa-heart', title: 'Pendengar Terbaik', text: 'Kamu selalu punya waktu dan kesabaran buat dengerin semua cerita & keluh kesahku.' },
            { icon: 'fa-face-smile-beam', title: 'Penular Senyum', text: 'Senyum dan tawa bahagiamu selalu berhasil mencairkan suasana yang canggung/sedih.' },
            { icon: 'fa-star', title: 'Hati Yang Tulus', text: 'Kebaikan hatimu kepada siapa pun selalu bikin aku kagum dan bangga punya sahabat seperti kamu.' },
            { icon: 'fa-gem', title: 'Selalu Setia Kawan', text: 'Dalam suka maupun duka, kamu nggak pernah absen buat kasih dukungan terbaik.' },
            { icon: 'fa-wand-magic-sparkles', title: 'Bikin Suasana Ceria', text: 'Setiap kali jalan atau kumpul bareng kamu, hari-hari biasa terasa jadi lebih istimewa!' },
            { icon: 'fa-sun', title: 'Sosok Yang Tangguh', text: 'Aku selalu kagum sama kegigihan dan ketegaranmu dalam menghadapi tantangan!' }
        ];

        function renderReasons() {
            const grid = document.getElementById('reasonsGrid');
            grid.innerHTML = reasonsData.map((item, idx) => `
                <div onclick="revealReason(this)" class="glass-card p-6 rounded-2xl shadow-md hover:shadow-xl border border-white transition-all cursor-pointer transform hover:-translate-y-1 group">
                    <div class="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <h3 class="font-bold text-slate-800 text-base mb-2">Reason #${idx + 1}: ${item.title}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        ${item.text}
                    </p>
                </div>
            `).join('');
        }

        function revealReason(card) {
            confetti({
                particleCount: 25,
                spread: 40,
                origin: { y: 0.7 },
                colors: ['#38BDF8', '#BAE6FD', '#C084FC']
            });
            card.classList.add('ring-2', 'ring-sky-400', 'bg-sky-50/90');
        }

        /* -------------------------------------------------------------
           8. ADD NEW STICKY NOTE WISH
        ------------------------------------------------------------- */
        function addNewWish() {
            const authorInput = document.getElementById('wishAuthor');
            const contentInput = document.getElementById('wishContent');
            const board = document.getElementById('stickyNotesBoard');

            const author = authorInput.value.trim();
            const content = contentInput.value.trim();

            if (!author || !content) {
                alert('Silakan isi nama dan pesan ucapanmu terlebih dahulu ya! ✨');
                return;
            }

            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];

            const note = document.createElement('div');
            note.className = `bg-sky-100/90 p-5 rounded-2xl shadow-md border border-sky-200 transform ${randomRotation} hover:rotate-0 transition-transform animate-float`;
            note.innerHTML = `
                <p class="text-xs font-bold text-sky-800 mb-2">📌 Dari ${escapeHtml(author)}</p>
                <p class="text-sm text-slate-700 italic">"${escapeHtml(content)}"</p>
            `;

            board.prepend(note);

            authorInput.value = '';
            contentInput.value = '';

            confetti({
                particleCount: 30,
                spread: 50,
                origin: { y: 0.8 },
                colors: ['#38BDF8', '#BAE6FD']
            });
        }

        function escapeHtml(text) {
            return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        /* -------------------------------------------------------------
           9. ON LOAD INITIALIZATION
        ------------------------------------------------------------- */
        window.onload = function() {
            initParticles();
            animateCanvas();
            initCountdown();
            renderReasons();
        };
