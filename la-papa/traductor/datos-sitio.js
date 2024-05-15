const datos_sitio_txt = [

    '2022-09-10 13:34:53,0,0,535,487,452,424',
    '2022-09-10 13:34:55,1,0,313,302,294,310',
    '2022-09-10 13:34:57,2,0,374,380,380,364',
    '2022-09-10 13:34:58,3,0,322,320,316,314',
    '2022-09-10 13:35:00,4,0,294,293,293,297',
    '2022-09-10 13:35:02,5,0,373,381,383,363',
    '2022-09-10 13:35:04,6,0,314,310,307,307',
    '2022-09-10 13:35:06,7,0,292,291,291,295',
    '2022-09-10 13:35:08,8,0,373,381,382,361',
    '2022-09-10 13:35:09,9,0,284,278,275,283',
    '2022-09-10 13:35:11,10,0,607,516,619,524',
    '2022-09-10 13:35:13,11,0,472,436,459,451',
    '2022-09-10 13:35:15,12,0,383,368,367,377',
    '2022-09-10 13:34:53,0,0,510,446,403,380',
    '2022-09-10 13:34:55,1,0,395,394,389,378',
    '2022-09-10 13:34:56,2,0,324,319,315,317',
    '2022-09-10 13:34:53,0,0,491,419,370,335',
    '2022-09-10 13:34:55,1,0,368,367,361,347',
    '2022-09-10 13:34:57,2,0,302,297,294,298',
    '2022-09-10 13:34:59,3,0,313,314,314,312',
    '2022-09-10 13:35:01,4,0,351,356,358,344',
    '2022-09-10 13:35:03,5,0,294,290,288,292',
    '2022-09-10 13:35:04,6,0,331,335,338,330',
    '2022-09-10 13:35:06,7,0,320,320,319,314',
    '2022-09-10 13:35:08,8,0,301,299,299,301',
    '2022-09-10 13:35:10,9,0,336,338,338,327',
    '2022-09-10 13:35:12,10,0,292,288,286,290',
    '2022-09-10 13:35:14,11,0,350,358,361,347',
    '2022-09-10 13:34:53,0,0,487,414,365,336',
    '2022-09-10 13:34:55,1,0,368,366,360,346',
    '2022-09-10 13:34:57,2,0,298,294,291,296',
    '2022-09-10 13:34:59,3,0,335,340,342,334',
    '2022-09-10 13:35:00,4,0,329,329,328,322',
    '2022-09-10 13:35:02,5,0,295,292,291,295',
    '2022-09-10 13:35:04,6,0,351,357,360,346',
    '2022-09-10 13:35:06,7,0,308,305,303,303',
    '2022-09-10 13:35:08,8,0,307,308,308,306',
    '2022-09-10 13:35:10,9,0,314,314,313,308',
    '2022-09-10 13:34:53,0,0,525,467,427,397',
    '2022-09-10 13:34:54,1,0,336,329,322,327',
    '2022-09-10 13:34:56,2,0,349,351,352,343',
    '2022-09-10 13:34:58,3,0,320,319,317,315',
    '2022-09-10 13:35:00,4,0,307,305,304,304',
    '2022-09-10 13:34:53,0,0,508,442,397,364',
    '2022-09-10 13:34:55,1,0,347,342,336,333',
    '2022-09-10 13:34:57,2,0,332,332,331,327',
    '2022-09-10 13:34:58,3,0,319,318,318,315',
    '2022-09-10 13:35:00,4,0,310,309,308,306',
    '2022-09-10 13:35:02,5,0,319,320,320,316',
    '2022-09-10 13:35:04,6,0,325,326,326,321',
    '2022-09-10 13:35:06,7,0,310,309,308,307',
    '2022-09-10 13:34:53,0,0,512,447,402,370',
    '2022-09-10 13:34:55,1,0,341,334,327,327',
    '2022-09-10 13:34:57,2,0,330,330,330,326',
    '2022-09-10 13:34:58,3,0,316,315,314,312',
    '2022-09-10 13:35:00,4,0,313,313,313,311',
    '2022-09-10 13:35:02,5,0,316,316,316,312',
    '2022-09-10 13:35:04,6,0,314,314,314,311',
    '2022-09-10 13:35:06,7,0,324,325,326,320',
    '2022-09-10 13:35:08,8,0,318,318,317,314',
    '2022-09-10 13:35:09,9,0,311,310,309,308',
    '2022-09-10 13:35:11,10,0,317,318,318,315',
    '2022-09-10 13:35:13,11,0,319,319,319,315',
    '2022-09-10 13:35:15,12,0,311,310,309,308',
    '2022-09-10 13:38:03,0,0,508,447,405,373',
    '2022-09-10 13:38:05,1,0,350,345,339,337',
    '2022-09-10 13:38:07,2,0,322,320,318,317',
    '2022-09-10 13:38:09,3,0,320,321,321,318',
    '2022-09-10 13:38:11,4,0,318,318,318,314',
    '2022-09-10 13:38:12,5,0,313,313,312,310',
    '2022-09-10 13:38:22,0,0,513,448,404,372',
    '2022-09-10 13:38:24,1,0,350,345,339,337',
    '2022-09-10 13:38:29,0,0,506,438,392,359',
    '2022-09-10 13:38:31,1,0,343,337,330,327',
    '2022-09-10 13:38:33,2,0,324,324,323,320',
    '2022-09-10 13:38:34,3,0,315,314,313,311',
    '2022-09-10 13:38:36,4,0,318,319,319,315',
    '2022-09-10 13:38:41,0,0,509,442,397,364',
    '2022-09-10 13:38:43,1,0,342,335,328,326',
    '2022-09-10 13:38:45,2,0,324,323,322,320',
    '2022-09-10 13:38:47,3,0,325,326,326,321',
    '2022-09-10 13:38:48,4,0,312,311,310,309',
    '2022-09-10 13:38:50,5,0,317,318,318,315',
    '2022-09-10 13:38:52,6,0,323,324,324,319',
    '2022-09-10 13:38:54,7,0,320,320,320,317',
    '2022-09-10 13:38:56,8,0,322,323,323,318',
    '2022-09-10 13:38:58,9,0,312,310,310,308',
    '2022-09-10 13:38:59,10,0,322,323,324,319',
    '2022-09-10 13:39:07,0,0,507,439,392,359',
    '2022-09-10 13:39:09,1,0,356,352,346,340',
    '2022-09-10 13:39:11,2,0,325,323,321,320',
    '2022-09-10 13:39:13,3,0,314,312,311,310',
    '2022-09-10 13:39:15,4,0,318,319,319,316',
    '2022-09-10 13:39:16,5,0,325,327,327,322',
    '2022-09-10 13:39:18,6,0,316,315,314,312',
    '2022-09-10 13:39:20,7,0,313,312,312,310',
    '2022-09-10 13:39:22,8,0,324,326,326,321',
    '2022-09-10 13:39:24,9,0,315,315,314,312',
    '2022-09-10 13:39:25,10,0,315,315,315,312',
    '2022-09-10 13:39:27,11,0,325,326,326,321',
    '2022-09-10 13:39:29,12,0,312,311,310,309',
    '2022-09-10 13:39:31,13,0,324,325,326,320',
    '2022-09-10 13:39:33,14,0,318,318,317,314',
    '2022-09-10 13:39:35,15,0,308,307,306,306',
    '2022-09-10 13:39:48,0,0,487,413,365,336',
    '2022-09-10 13:39:50,1,0,359,355,348,338',
    '2022-09-10 13:39:52,2,0,305,301,299,302',
    '2022-09-10 13:39:54,3,0,324,326,327,322',
    '2022-09-10 13:39:56,4,0,327,327,327,321',
    '2022-09-10 13:40:01,0,0,499,429,382,348',
    '2022-09-10 13:40:02,1,0,346,340,333,328',
    '2022-09-10 13:40:04,2,0,307,304,302,305',
    '2022-09-10 13:40:06,3,0,339,342,342,332',
    '2022-09-10 13:40:08,4,0,336,336,334,323',
    '2022-09-10 13:40:10,5,0,451,389,359,341',
    '2022-09-10 13:40:12,6,0,397,397,393,377',
    '2022-09-10 13:40:13,7,0,371,367,360,357',
    '2022-09-10 13:40:15,8,0,318,296,284,318',
    '2022-09-10 13:40:17,9,0,382,376,370,377',
    '2022-09-10 13:40:19,10,0,370,368,362,355',
    '2022-09-10 13:40:21,11,0,348,315,298,350',
    '2022-09-10 13:40:23,12,0,755,693,605,601',
    '2022-09-10 13:40:24,13,0,427,398,366,405',
    '2022-09-10 13:40:32,0,0,526,465,424,395',
    '2022-09-10 13:40:34,1,0,332,323,314,320',
    '2022-09-10 13:40:36,2,0,334,335,335,331',
    '2022-09-10 13:40:38,3,0,335,336,336,329',
    '2022-09-10 13:40:49,0,0,534,471,429,406',
    '2022-09-10 13:40:51,1,0,387,384,379,374',
    '2022-09-10 13:40:56,0,0,512,447,402,370',
    '2022-09-10 13:40:58,1,0,360,358,353,348',
    '2022-09-10 13:40:59,2,0,361,365,366,355',
    '2022-09-10 13:41:01,3,0,336,336,334,329',
    '2022-09-10 13:41:03,4,0,308,305,302,301',
    '2022-09-10 13:41:05,5,0,282,277,276,281',
    '2022-09-10 13:41:07,6,0,297,296,296,296',
    '2022-09-10 13:41:09,7,0,337,343,346,336',
    '2022-09-10 13:41:10,8,0,348,351,350,338',
    '2022-09-10 13:41:12,9,0,300,296,293,294',
    '2022-09-10 13:41:14,10,0,294,293,292,295',
    '2022-09-10 13:41:16,11,0,338,344,347,337',
    '2022-09-10 13:41:18,12,0,350,355,356,344',
    '2022-09-10 13:41:20,13,0,304,300,298,299',
    '2022-09-10 13:41:21,14,0,298,297,296,298',
    '2022-09-10 13:41:23,15,0,335,339,341,333',
    '2022-09-10 13:41:25,16,0,322,322,321,317',
    '2022-09-10 13:41:27,17,0,302,300,299,300',
    '2022-09-10 13:41:29,18,0,323,326,327,321',
    '2022-09-10 13:41:31,19,0,326,327,326,320',
    '2022-09-10 13:41:32,20,0,304,303,302,303',
    '2022-09-10 13:41:34,21,0,328,331,332,325',
    '2022-09-10 13:41:36,22,0,321,321,320,316',
    '2022-09-10 13:41:38,23,0,306,304,303,303',
    '2022-09-10 13:41:40,24,0,321,323,324,319',
    '2022-09-10 13:41:42,25,0,338,341,341,330',
    '2022-09-10 13:41:43,26,0,804,720,1023,1023',
    '2022-09-10 20:52:28,0,0,516,525,519,669',
    '2022-09-10 20:52:30,1,0,535,468,430,552',
    '2022-09-10 20:52:32,2,0,782,749,702,739',
    '2022-09-10 20:52:34,3,0,593,501,456,603',
    '2022-09-10 20:52:35,4,0,819,736,664,774',
    '2022-09-10 20:52:37,5,0,716,594,526,713',
    '2022-09-10 20:52:39,6,0,889,784,699,851',
    '2022-09-10 20:52:41,7,0,817,707,629,787',
    '2022-09-10 20:52:43,8,0,804,689,610,776',
    '2022-09-10 20:52:45,9,0,930,841,753,877',
    '2022-09-10 20:52:46,10,0,729,607,539,725',
    '2022-09-10 20:52:48,11,0,962,871,783,906',
    '2022-09-10 20:52:50,12,0,758,643,568,739',
    '2022-09-10 20:52:52,13,0,883,779,699,851',
    '2022-09-10 20:52:54,14,0,842,735,650,803',
    '2022-09-10 20:52:56,15,0,782,665,589,759',
    '2022-09-10 20:52:57,16,0,960,865,775,897',
    '2022-09-10 20:52:59,17,0,730,612,538,723',
    '2022-09-10 20:53:01,18,0,966,873,785,906',
    '2022-09-10 20:53:03,19,0,731,612,538,723',
    '2022-09-10 20:53:05,20,0,947,848,762,893',
    '2022-09-10 20:53:07,21,0,152,281,134,0',
    '2022-09-10 20:53:08,22,0,600,670,663,575',
    '2022-09-10 20:53:10,23,0,467,318,339,545',
    '2022-09-10 20:53:12,24,0,390,359,334,382'
    
]
