
		window.onload=montre;
		function montre(id) {
		var d = document.getElementById(id);
			for (var i = 1; i<=10; i++) {
				if (document.getElementById('smenu'+i)) {
					document.getElementById('smenu'+i).style.display='none';
				}
			}
		if (d) {
			d.style.display='block';
		}
		}
		
		
		function fond(id) {
		var jvb = document.getElementById(id);
			for (var i = 1; i<=10; i++) {
				if (document.getElementById('truc'+i)) {document.getElementById('truc'+i).style.background='grey';}
			}
  		if (jvb) jvb.style.background='grey';
		}
