{assign var="corex_stock" value=$Artikel->fLagerbestand|default:0}

{if $corex_stock > 0}
<script>
    (function() {
        var corex_now = new Date();
        var corex_day = corex_now.getDay();
        
        if (corex_day === 0 || corex_day === 6) return;

        function injectCorexShippingTimer() {
            var corex_anchor = document.querySelector('.delivery-status');
            if (!corex_anchor || document.getElementById('corex-shipping-timer')) return;

            var corex_original = corex_anchor.querySelector('.status');
            if (corex_original) {
                corex_original.style.display = 'none';
            }

            var deadline = 10;
            var current_h = corex_now.getHours();
            var target_h = (current_h < deadline) ? deadline : 24;
            
            var target_date = new Date(corex_now.getFullYear(), corex_now.getMonth(), corex_now.getDate(), target_h, 0, 0);
            var diff = target_date - corex_now;
            
            var h = Math.floor(diff / (1000 * 60 * 60));
            var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            var timer_node = document.createElement('div');
            timer_node.id = 'corex-shipping-timer';
            timer_node.style.cssText = 'font-size: 13px; color: #1a1a1a; font-family: sans-serif; display: block;';
            
            var message = '';
            if (current_h < deadline) {
                message = '🚚 Bestelle innerhalb von <strong>' + h + ' Std. ' + m + ' Min.</strong> für <strong>heutigen Versand</strong>!';
            } else {
                message = '🚚 Bestelle innerhalb von <strong>' + h + ' Std. ' + m + ' Min.</strong> für <strong>morgigen Versand</strong>!';
            }

            timer_node.innerHTML = message;
            corex_anchor.appendChild(timer_node);
        }

        var corex_observer = new MutationObserver(function() { injectCorexShippingTimer(); });
        corex_observer.observe(document.body, { childList: true, subtree: true });
        injectCorexShippingTimer();
    })();
</script>
{/if}