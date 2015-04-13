
/***
for storing delays
Migration:

$ rails g migration add_location_data_to_users location_data:text

should create:

class Migration0001
  def change
    add_column :users, :location_data, :text
  end
end

Your Class Would Look Like:

class User < ActiveRecord::Base
  serialize :location_data
end

Available Actions:

b = User.new
b.location_data = [1,2,{foot: 3, bart: "noodles"}]
b.save

***/

var npc_types={
	0:{
		id: 0,
		health: 100,
		damage: 2,
		shield: 0,
		support: 0,
		see_distanse: 4,
		attack_distanse: 2,
		attack_speed: 4,
		move_speed: 1,
		cost: 10,
		receive: 5,
		bullet_type: 1,
		type: 1,
		textures:{
			idle:{
				src:"/imgtest/wr.png",
				frames: 8,
				height: 128,
			},
			walkleft:{
				src:"/imgtest/wl.jpeg",
				frames: 8,
				height: 128
			},
			walkright:{
				src:"/imgtest/wr.png",
				frames: 8,
				height: 128
			},
		}
	},
	1:{
		id: 1,
		health: 100,
		damage: 2,
		shield: 0,
		support: 0,
		see_distanse: 4,
		attack_distanse: 2,
		attack_speed: 4,
		move_speed: 1,
		cost: 10,
		receive: 5,
		bullet_type: 1,
		type: 1,
		textures:{
			idle:{
				src:"/imgtest/wr.png",
				frames: 8,
				height: 128,
				width: 128,
			},
			walkleft:{
				src:"/imgtest/wl.jpeg",
				frames: 8,
				height: 128,
				loop: true
			},
			walkright:{
				src:"/imgtest/wr.png",
				frames: 8,
				height: 128,
				loop: true,
			},
		}
	}
}

var tower_types={
	0:{
		id: 0,
		health: 200,
		textures:{
			idle:{
				src:"/imgtest/tower.png",
				frames: 1,
				height: 512,
			},
		},
	},
	1:{
		id: 1,
		health: 200,
		damage: 20,
		energy: 0,
		shield: 0,
		attack_distanse: 3,
		attack_speed: 2,
		cost: 40,
		receive: 10,
		name: "Base",
		bullet_type: 1,
		textures:{
			idle:{
				src:"/imgtest/tower.png",
				frames: 1,
				height: 512,
			},
		},
	},
	2:{
		id: 2,
		health: 250,
		damage: 40,
		energy: 0,
		shield: 0,
		attack_distanse: 2,
		attack_speed: 4,
		cost: 30,
		receive: 5,
		bullet_type: 1,
		effect:{
			speed: 0,
			damage: 0,
			shield: 0,
			status: 0,
			time: 0,
		},
		textures:{
			idle:{
				src:"/imgtest/tower.png",
				frames: 1,
				height: 512,
			},
		},
	},
}

var bullet_types={
	1:{
		id: 1,
		move_type: 2,
		attack_type: 1,
		speed: 1.2,
		solid: 0,
		textures:{
			idle:{
				src: "/imgtest/bullet.png",
				frames: 1,
				height: 256,
				width:64,
			},
		},
	},
	2:{
		id: 2,
		name: "solid",
		move_type: 1,
		attack_type: 1,
		speed: 0,
		solid: 1,
		textures:{
			idle:{
				src: "/imgtest/solid_bullet.png",
				frames: 1,
				height: 256,
				width: 64,
				delays:{
					last_frame: 0.4,
				}
			},
		},
	},
	3:{
		id: 3,
		move_type: 2,
		attack_type: 1,
		speed: 2,
		textures:{
			idle:{
				src: "/imgtest/bullet.png",
				frames: 1,
				height: 256,
				width:64,
			},
		},
	},
	4:{
		id: 4,
		speed: 0,
		textures:{
			idle:{
				src: "/imgtest/bullet.png",
				frames: 1,
				height: 256,
				width:64,
			},
		},
	},
	5:{
		id: 5,
		speed: 0,
		textures:{
			idle:{
				src: "/imgtest/bullet.png",
				frames: 1,
				height: 256,
				width:64,
			},
		},
	}
}

var maps={
	"4":{
		"mp":"30\n111-1111101011110111011101-1111111101-1011100101011101011111111-1011111010110101110111-11101-000010000101001000100100-1-1110110111111011010111101101110010110110100010011101101101001110000100111110111101100001111011110111110000100001111100011010010111-11110111111000111111001011101110110010000011111011111000100100011111111110010001001101101110110100011111111111101111100010000101110100000101100101111111111101000111110110001100100010010001011101-100101110011111101111111110011111111000111000001010001100000010011011101010111011101101111111111010101111100001000111000000110010100001110111110110011111111110111111000011000011110010100000110001011011111010000110011111111011111111101110111111110000010111000001001010100000111011010001011101011111101101111011011111110111000010001101101-000101000100010111101000-1-111-1111111010111010010111-111111111000010100100110101011111111-1101111110111111111101-111\n001000000000000000000000010100000000100000000000001000000000101010000000000000000000000101000000000000000000000000100000100011000000000100000010110001000011001000000000100000110000000000000000000000000010000000000000001001000000000000000000001000000000001000000000001000000000000000000000000000000001000000000000000000000000000000100010100100001000000100000000000000000000000000000000000000010000100000000000000000000000000000000000000000000000000000000000100000000000000100010000000000000000000000000000000000010000000100000001000000000000000000000000000000000000000000000000000000101001000000000000000000000000000010000000000001000000000000110000000000001000000000000000000000000000000000000000000000000000000000000000010110000000000000100000011000000110000000000000000000011001000000000000000000000001000000101000000000001000000000000101000001000000000000010000000000001000000000001000000000000100\nmax_npcs 2000\nmax_towers 2000\nmax_bullets 4500\nbases 4\n0 500 -1 \n1 868 0 \n2 58 1 \n3 31 2 \n4 841 3 \npoints 4\n0 838\n1 88\n2 61\n3 811\nwaves 0\n",
		"mg":"1 /imgtest/1.png\n2 /imgtest/2.png\n3 /textures/wall/1.png\n4 /textures/wall/1_small.png\n-\n1 2 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \nminimap 1\nwalls 355\n211 x 4\n241 x 4\n271 x 4\n93 x 4\n123 x 4\n153 x 4\n183 x 4\n96 x 4\n126 x 4\n156 x 4\n186 x 4\n216 x 4\n246 x 4\n35 x 4\n65 x 4\n9 x 4\n39 x 4\n11 x 4\n71 x 4\n101 x 4\n43 x 4\n73 x 4\n103 x 4\n133 x 4\n163 x 4\n159 x 4\n189 x 4\n16 x 4\n46 x 4\n76 x 4\n106 x 4\n136 x 4\n166 x 4\n165 x 4\n195 x 4\n225 x 4\n255 x 4\n285 x 4\n48 x 4\n78 x 4\n108 x 4\n138 x 4\n52 x 4\n82 x 4\n112 x 4\n113 x 4\n143 x 4\n173 x 4\n203 x 4\n116 x 4\n146 x 4\n206 x 4\n176 x 4\n236 x 4\n24 x 4\n54 x 4\n20 x 4\n170 x 4\n200 x 4\n230 x 4\n298 x 4\n328 x 4\n387 x 4\n417 x 4\n447 x 4\n717 x 4\n777 x 4\n747 x 4\n714 x 4\n744 x 4\n774 x 4\n804 x 4\n772 x 4\n802 x 4\n832 x 4\n862 x 4\n864 x 4\n894 x 4\n707 x 4\n737 x 4\n767 x 4\n797 x 4\n827 x 4\n857 x 4\n763 x 4\n793 x 4\n823 x 4\n883 x 4\n853 x 4\n695 x 4\n725 x 4\n755 x 4\n785 x 4\n692 x 4\n722 x 4\n752 x 4\n482 x 4\n512 x 4\n542 x 4\n572 x 4\n544 x 4\n574 x 4\n604 x 4\n634 x 4\n332 x 4\n362 x 4\n392 x 4\n422 x 4\n244 x 4\n274 x 4\n304 x 4\n305 x 4\n335 x 4\n395 x 4\n425 x 4\n455 x 4\n454 x 4\n484 x 4\n516 x 4\n546 x 4\n576 x 4\n490 x 4\n520 x 4\n488 x 4\n518 x 4\n432 x 4\n462 x 4\n492 x 4\n278 x 4\n308 x 4\n338 x 4\n368 x 4\n282 x 4\n312 x 4\n342 x 4\n372 x 4\n345 x 4\n375 x 4\n347 x 4\n377 x 4\n407 x 4\n437 x 4\n409 x 4\n439 x 4\n262 x 4\n292 x 4\n443 x 4\n473 x 4\n472 x 4\n502 x 4\n652 x 4\n682 x 4\n712 x 4\n620 x 4\n650 x 4\n710 x 4\n830 x 4\n860 x 4\n381 x 4\n411 x 4\n498 x 4\n528 x 4\n558 x 4\n559 x 4\n589 x 4\n619 x 4\n678 x 4\n708 x 4\n625 x 4\n655 x 4\n628 x 4\n658 x 4\n494 x 4\n524 x 4\n554 x 4\n553 x 4\n583 x 4\n613 x 4\n614 x 4\n644 x 4\n611 x 4\n641 x 4\n705 x 4\n735 x 4\n701 x 4\n731 x 4\n791 x 4\n821 x 4\n851 x 4\n697 x 4\n727 x 4\n638 x 4\n668 x 4\n846 x 4\n876 x 4\n420 x 4\n450 x 4\n501 x 4\n531 x 4\n90 y 4\n150 y 4\n151 y 4\n94 y 4\n95 y 4\n98 y 4\n99 y 4\n100 y 4\n44 y 4\n161 y 4\n162 y 4\n188 y 4\n222 y 4\n223 y 4\n224 y 4\n227 y 4\n228 y 4\n229 y 4\n109 y 4\n110 y 4\n115 y 4\n205 y 4\n204 y 4\n178 y 4\n179 y 4\n238 y 4\n237 y 4\n327 y 4\n329 y 4\n324 y 4\n325 y 4\n264 y 4\n263 y 4\n291 y 4\n290 y 4\n289 y 4\n288 y 4\n349 y 4\n348 y 4\n374 y 4\n373 y 4\n430 y 4\n429 y 4\n428 y 4\n370 y 4\n369 y 4\n309 y 4\n311 y 4\n313 y 4\n286 y 4\n306 y 4\n421 y 4\n393 y 4\n331 y 4\n272 y 4\n243 y 4\n426 y 4\n483 y 4\n489 y 4\n491 y 4\n433 y 4\n436 y 4\n435 y 4\n410 y 4\n383 y 4\n384 y 4\n385 y 4\n386 y 4\n389 y 4\n448 y 4\n508 y 4\n509 y 4\n506 y 4\n505 y 4\n504 y 4\n503 x 4\n563 y 4\n564 y 4\n565 y 4\n566 y 4\n567 y 4\n568 y 4\n592 y 4\n593 y 4\n653 y 4\n654 y 4\n626 y 4\n659 y 4\n718 y 4\n716 y 4\n715 y 4\n806 y 4\n805 y 4\n770 y 4\n769 y 4\n768 y 4\n829 y 4\n856 y 4\n795 y 4\n794 y 4\n704 y 4\n703 y 4\n702 y 4\n617 y 4\n618 y 4\n557 y 4\n497 y 4\n496 y 4\n552 y 4\n555 y 4\n577 y 4\n578 y 4\n579 y 4\n637 y 4\n639 y 4\n729 y 4\n728 y 4\n789 y 4\n790 y 4\n787 y 4\n847 y 4\n848 y 4\n849 y 4\n630 y 4\n571 y 4\n631 y 4\n632 y 4\n633 y 4\n691 y 4\n693 y 4\n694 y 4\n784 y 4\n783 y 4\n780 y 4\n185 y 4\n184 y 4\n854 y 4\n773 y 4\n105 y 4\n3 y 3\n63 y 3\n92 y 3\n37 y 3\n250 y 3\n782 y 3\n813 y 3\n873 y 3\n809 y 3\n896 y 3\n445 y 3\n807 y 3\n836 y 3\n119 y 3\n117 y 3\n86 y 3\n26 y 3\n"
	}
}

var engine = new TDefEngine(document.getElementById("gameDiv"),{webgl: true, frameTime:1000/30})
// create a texture from an image path
var texture = new PIXI.BaseTexture.fromImage("/imgtest/coin.png");
// create a new Sprite using the texture
//var bunny = new ASprite([new PIXI.Texture(texture, new PIXI.Rectangle(0, 0, 100, 100))]);
//for (var i =1;i<10;i++)
//	bunny.setFrame(i, new PIXI.Texture(texture, new PIXI.Rectangle(100*i, 0, 100, 100)))
// center the sprites anchor point
//	bunny.anchor.x = 0.5;
//	bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
//	bunny.position.x = 200;
//	bunny.position.y = 150;

//	stage.addChild(bunny);

var atlas = new PIXI.BaseTexture.fromImage("/imgtest/red.jpeg");
//	var a=new Grid(5)
var size=30
var nodes=[]
var outnodes=[[],[],[],[]]
for(var i=0;i<4;i++)
	for(var j=0;j<engine.outerSize(size);j++)
		outnodes[i].push(1)
for (var i =0;i<size*size;i++)
	nodes.push(0)
//	a.setFrame(0,new PIXI.Texture(atlas, new PIXI.Rectangle(0, 0, 100, 100)))
engine.setMap("4")
//engine.stage.addChild(bunny)
data=[
{msg:3,id:90,objtype:"Bullet",create:1,grid:{$:0,x:24.374,y:29.4},$:0,type:2,owner:1,source:{$:0,x:27.125,y:28.5},$:0},
{msg:3,id:90,objtype:"Bullet",create:1,grid:{$:0,x:27.125,y:28.5},$:0,type:2,owner:2,source:{$:0,x:24.374,y:29.4},$:0}
]
for (var i=0;i<1;i++){	
//	engine.map.objects[i]=new Npc({type:1,grid:{x:2.6/*Math.random()*size*/,y:1/*Math.random()*size*/}})
//	engine.map.objects[i]=new Bullet(data[i])
//	engine.map.objects[i].update({grid:{x:2,y:2},time: 1});
//	engine.map.objects[i].update({grid:{x:5,y:5},time: 5000});
//	engine.stage.addChild(engine.map.objects[i])
}

//var t=PIXI.Texture.fromImage("/imgtest/red.jpeg");
//var tile=new PIXI.TilingSprite(t,400,100)
//var tile=new ATilingSprite([t],{loop:true, width: 400, height:100})
//engine.stage.addChild(tile)

//var t1=[PIXI.Texture.fromImage("/imgtest/tree.jpeg")];
//var t2=getTextureFrames(npc_types[0].textures["idle"]);
//var t3=[PIXI.Texture.fromImage("/imgtest/build.png")];

//engine.map.objects["button"]=new ButtonContainer({sprite:{textures:t3,opt:{width:400,height:400}},focused:{textures:t2},position:{x:100,y:100},actions:["press","drag"]});
//engine.map.objects["button"].keyPadInit({rows: 3, columns: 1, buttonSize: {x:100,y:100}});
//engine.map.objects["button"].keyPadAddButton(4,{sprite:{textures:t1,opt:{width:200,height:200}},position:{x:40,y:40},actions:["press","drag"],pressAction:function(){alert("pressed")}});
//engine.stage.addChild(engine.map.objects["button"]);
