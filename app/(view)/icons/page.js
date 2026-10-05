"use client";

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from '@/components/base/UxGroup';

export default function Page() {
	const data = [
		{
			subject: 'icon',
			class: 'icon',
			column: '4',
			content: [
				'arrow-up',
				'arrow-down',
				'arrow-left',
				'arrow-right',
				'home',
				'menu',
				'more',
				'close',
				'search',
				'tooltip',
				'info',
				'danger',
				'calendar',
				'time',
				'share',
				'filter',
				'download',
				'clip',
				'clear',
				'reset',
			]
		},
		{
			subject: 'check',
			class: 'icons',
			column: '2',
			content: [
				'check',
				'check selected',
				'check disabled',
			]
		},
		{
			subject: 'checkbox',
			class: 'icons',
			column: '2',
			content: [
				'checkbox',
				'checkbox selected',
				'checkbox disabled',
				'checkbox selected disabled',
			]
		},
		{
			subject: 'radio',
			class: 'icons',
			column: '2',
			content: [
				'radio',
				'radio selected',
				'radio disabled',
				'radio selected disabled',
			]
		},
		{
			subject: 'valid',
			class: 'icons',
			column: '2',
			content: [
				'valid',
				'invalid',
			]
		},
		{
			subject: 'notification',
			class: 'icons',
			column: '2',
			content: [
				'notification',
				'notification pushed',
			]
		},
		{
			subject: 'pagination',
			class: 'icons',
			column: '2',
			content: [
				'pagination first',
				'pagination prev',
				'pagination next',
				'pagination last',
				'pagination first disabled',
				'pagination prev disabled',
				'pagination next disabled',
				'pagination last disabled',
			]
		},
		{
			subject: 'bank',
			class: 'icons',
			column: '5',
			content: [
				'bank-000', 'bank-002', 'bank-003', 'bank-004', 'bank-005',
				'bank-007', 'bank-011', 'bank-012', 'bank-020', 'bank-023',
				'bank-027', 'bank-030', 'bank-031', 'bank-032', 'bank-034',
				'bank-035', 'bank-037', 'bank-039', 'bank-045', 'bank-048',
				'bank-050', 'bank-054', 'bank-055', 'bank-057', 'bank-058',
				'bank-060', 'bank-061', 'bank-062', 'bank-063', 'bank-064',
				'bank-067', 'bank-071', 'bank-081', 'bank-088', 'bank-089',
				'bank-090', 'bank-092',
			]
		},
		{
			subject: 'stock',
			class: 'icons',
			column: '5',
			content: [
				'stock-209', 'stock-218', 'stock-221', 'stock-224', 'stock-225',
				'stock-226', 'stock-227', 'stock-230', 'stock-238', 'stock-240',
				'stock-243', 'stock-247', 'stock-261', 'stock-262', 'stock-263',
				'stock-264', 'stock-265', 'stock-266', 'stock-267', 'stock-268',
				'stock-269', 'stock-270', 'stock-271', 'stock-278', 'stock-279',
				'stock-280', 'stock-287', 'stock-288', 'stock-290', 'stock-291',
				'stock-292', 'stock-294', 'stock-295',
			]
		},
		{
			subject: 'card',
			class: 'icons',
			column: '5',
			content: [
				'card-000', 'card-002', 'card-003', 'card-007', 'card-011',
				'card-023', 'card-027', 'card-031', 'card-032', 'card-034',
				'card-035', 'card-037', 'card-039', 'card-041', 'card-044',
				'card-048', 'card-050', 'card-089', 'card-090', 'card-092',
				'card-361', 'card-364', 'card-365', 'card-366', 'card-367',
				'card-368', 'card-369', 'card-370', 'card-371', 'card-372',
				'card-373', 'card-374', 'card-381',
			]
		},
		{
			subject: 'fin',
			class: 'icons',
			column: '5',
			content: [
				'fin-f00', 'fin-f01', 'fin-f02', 'fin-f03', 'fin-f04',
				'fin-f05', 'fin-f06', 'fin-f07', 'fin-f08', 'fin-f09',
				'fin-f10', 'fin-f11', 'fin-f12', 'fin-f13', 'fin-f14',
				'fin-f15', 'fin-f16', 'fin-f17', 'fin-f18', 'fin-f19',
				'fin-f20', 'fin-f21', 'fin-f22', 'fin-f23', 'fin-f24',
				'fin-f25', 'fin-f26', 'fin-f27', 'fin-f28', 'fin-f29',
				'fin-f30', 'fin-f31', 'fin-f32', 'fin-f33', 'fin-f36',
				'fin-f38', 'fin-f39', 'fin-f43',
			]
		},
		{
			subject: 'sb',
			class: 'icons',
			column: '5',
			content: [
				'sb-000', 'sb-002', 'sb-003', 'sb-007', 'sb-008',
				'sb-012', 'sb-014', 'sb-016', 'sb-017', 'sb-021',
				'sb-024', 'sb-028', 'sb-036', 'sb-038', 'sb-048',
				'sb-049', 'sb-062', 'sb-063', 'sb-064', 'sb-065',
				'sb-066', 'sb-067', 'sb-068', 'sb-101', 'sb-102',
				'sb-115', 'sb-120', 'sb-127', 'sb-130', 'sb-151',
				'sb-153', 'sb-158', 'sb-162', 'sb-207', 'sb-208',
				'sb-209', 'sb-304', 'sb-305', 'sb-310', 'sb-313',
				'sb-314', 'sb-317', 'sb-320', 'sb-321', 'sb-324',
				'sb-325', 'sb-328', 'sb-330', 'sb-332', 'sb-334',
				'sb-347', 'sb-351', 'sb-401', 'sb-403', 'sb-405',
				'sb-408', 'sb-459', 'sb-460', 'sb-461', 'sb-506',
				'sb-510', 'sb-551', 'sb-554', 'sb-556', 'sb-557',
				'sb-565', 'sb-566', 'sb-604', 'sb-605', 'sb-607',
				'sb-610', 'sb-614', 'sb-616', 'sb-617', 'sb-650',
				'sb-651', 'sb-654', 'sb-656', 'sb-657', 'sb-658',
			]
		},
		{
			subject: 'i000',
			class: 'icon mask',
			column: '5',
			content: [
				'i000', 'i001', 'i002', 'i003', 'i004', 'i005', 'i006', 'i007', 'i008', 'i009',
				'i010', 'i011', 'i012', 'i013', 'i014', 'i015', 'i016', 'i017', 'i018', 'i019',
				'i020', 'i021', 'i022', 'i023', 'i024', 'i025', 'i026', 'i027', 'i028', 'i029',
				'i030', 'i031', 'i032', 'i033', 'i034', 'i035', 'i036', 'i037', 'i038', 'i039',
				'i040', 'i041', 'i042', 'i043', 'i044', 'i045', 'i046', 'i047', 'i048', 'i049',
				'i050', 'i051', 'i052', 'i053', 'i054', 'i055', 'i056', 'i057', 'i058', 'i059',
				'i060', 'i061', 'i062', 'i063', 'i064', 'i065', 'i066', 'i067', 'i068', 'i069',
				'i070', 'i071', 'i072', 'i073', 'i074', 'i075', 'i076', 'i077', 'i078', 'i079',
				'i080', 'i081', 'i082', 'i083', 'i084', 'i085', 'i086', 'i087', 'i088', 'i089',
				'i090', 'i091', 'i092', 'i093', 'i094', 'i095', 'i096', 'i097', 'i098', 'i099',
			]
		},
		{
			subject: 'i100',
			class: 'icon mask',
			column: '5',
			content: [
				'i100', 'i101', 'i102', 'i103', 'i104', 'i105', 'i106', 'i107', 'i108', 'i109',
				'i110', 'i111', 'i112', 'i113', 'i114', 'i115', 'i116', 'i117', 'i118', 'i119',
				'i120', 'i121', 'i122', 'i123', 'i124', 'i125', 'i126', 'i127', 'i128', 'i129',
				'i130', 'i131', 'i132', 'i133', 'i134', 'i135', 'i136', 'i137', 'i138', 'i139',
				'i140', 'i141', 'i142', 'i143', 'i144', 'i145', 'i146', 'i147', 'i148', 'i149',
				'i150', 'i151', 'i152', 'i153', 'i154', 'i155', 'i156', 'i157', 'i158', 'i159',
				'i160', 'i161', 'i162', 'i163', 'i164', 'i165', 'i166', 'i167', 'i168', 'i169',
				'i170', 'i171', 'i172', 'i173', 'i174', 'i175', 'i176', 'i177', 'i178', 'i179',
				'i180', 'i181', 'i182', 'i183', 'i184', 'i185', 'i186', 'i187', 'i188', 'i189',
				'i190', 'i191', 'i192', 'i193', 'i194', 'i195', 'i196', 'i197', 'i198', 'i199',
			]
		},
		{
			subject: 'i200',
			class: 'icon mask',
			column: '5',
			content: [
				'i200', 'i201', 'i202', 'i203', 'i204', 'i205', 'i206', 'i207', 'i208', 'i209',
				'i210', 'i211', 'i212', 'i213', 'i214', 'i215', 'i216', 'i217', 'i218', 'i219',
				'i220', 'i221', 'i222', 'i223', 'i224', 'i225', 'i226', 'i227', 'i228', 'i229',
				'i230', 'i231', 'i232', 'i233', 'i234', 'i235', 'i236', 'i237', 'i238', 'i239',
				'i240', 'i241', 'i242', 'i243', 'i244', 'i245', 'i246', 'i247', 'i248', 'i249',
				'i250', 'i251', 'i252', 'i253', 'i254', 'i255', 'i256', 'i257', 'i258', 'i259',
				'i260', 'i261', 'i262', 'i263', 'i264', 'i265', 'i266', 'i267', 'i268', 'i269',
				'i270', 'i271', 'i272', 'i273', 'i274', 'i275', 'i276', 'i277', 'i278', 'i279',
				'i280', 'i281', 'i282', 'i283', 'i284', 'i285', 'i286', 'i287', 'i288', 'i289',
				'i290', 'i291', 'i292', 'i293', 'i294', 'i295', 'i296', 'i297', 'i298', 'i299',
			]
		},
		{
			subject: 'i300',
			class: 'icon mask',
			column: '5',
			content: [
				'i300', 'i301', 'i302', 'i303', 'i304', 'i305', 'i306', 'i307', 'i308', 'i309',
				'i310', 'i311', 'i312', 'i313', 'i314', 'i315', 'i316', 'i317', 'i318', 'i319',
				'i320', 'i321', 'i322', 'i323', 'i324', 'i325', 'i326', 'i327', 'i328', 'i329',
				'i330', 'i331', 'i332', 'i333', 'i334', 'i335', 'i336', 'i337', 'i338', 'i339',
				'i340', 'i341', 'i342', 'i343', 'i344', 'i345', 'i346', 'i347', 'i348', 'i349',
				'i350', 'i351', 'i352', 'i353', 'i354', 'i355', 'i356', 'i357', 'i358', 'i359',
				'i360', 'i361', 'i362', 'i363', 'i364', 'i365', 'i366', 'i367', 'i368', 'i369',
				'i370', 'i371', 'i372', 'i373', 'i374', 'i375', 'i376', 'i377', 'i378', 'i379',
				'i380', 'i381', 'i382', 'i383', 'i384', 'i385', 'i386', 'i387', 'i388', 'i389',
				'i390', 'i391', 'i392', 'i393', 'i394', 'i395', 'i396', 'i397', 'i398', 'i399',
			]
		},
		{
			subject: 'i400',
			class: 'icon mask',
			column: '5',
			content: [
				'i400', 'i401', 'i402', 'i403', 'i404', 'i405', 'i406', 'i407', 'i408', 'i409',
				'i410', 'i411', 'i412', 'i413', 'i414', 'i415', 'i416', 'i417', 'i418', 'i419',
				'i420', 'i421', 'i422', 'i423', 'i424', 'i425', 'i426', 'i427', 'i428', 'i429',
				'i430', 'i431', 'i432', 'i433', 'i434', 'i435', 'i436', 'i437', 'i438', 'i439',
				'i440', 'i441', 'i442', 'i443', 'i444', 'i445', 'i446', 'i447', 'i448', 'i449',
				'i450', 'i451', 'i452', 'i453', 'i454', 'i455', 'i456', 'i457', 'i458', 'i459',
				'i460', 'i461', 'i462', 'i463', 'i464', 'i465', 'i466', 'i467', 'i468', 'i469',
				'i470', 'i471', 'i472', 'i473', 'i474', 'i475', 'i476', 'i477', 'i478', 'i479',
				'i480', 'i481', 'i482', 'i483', 'i484', 'i485', 'i486', 'i487', 'i488', 'i489',
				'i490', 'i491', 'i492', 'i493', 'i494', 'i495', 'i496', 'i497', 'i498', 'i499',
			]
		},
		{
			subject: 'i500',
			class: 'icon mask',
			column: '5',
			content: [
				'i500', 'i501', 'i502', 'i503', 'i504', 'i505', 'i506', 'i507', 'i508', 'i509',
				'i510', 'i511', 'i512', 'i513', 'i514', 'i515', 'i516', 'i517', 'i518', 'i519',
				'i520', 'i521', 'i522', 'i523', 'i524', 'i525', 'i526', 'i527', 'i528', 'i529',
				'i530', 'i531', 'i532', 'i533', 'i534', 'i535', 'i536', 'i537', 'i538', 'i539',
				'i540', 'i541', 'i542', 'i543', 'i544', 'i545', 'i546', 'i547', 'i548', 'i549',
				'i550', 'i551', 'i552', 'i553', 'i554', 'i555', 'i556', 'i557', 'i558', 'i559',
				'i560', 'i561', 'i562', 'i563', 'i564', 'i565', 'i566', 'i567', 'i568', 'i569',
				'i570', 'i571', 'i572', 'i573', 'i574', 'i575', 'i576', 'i577', 'i578', 'i579',
				'i580', 'i581', 'i582', 'i583', 'i584', 'i585', 'i586', 'i587', 'i588', 'i589',
				'i590', 'i591', 'i592', 'i593', 'i594', 'i595', 'i596', 'i597', 'i598', 'i599',
			]
		},
		{
			subject: 'i600',
			class: 'icon mask',
			column: '5',
			content: [
				'i600', 'i601', 'i602', 'i603', 'i604', 'i605', 'i606', 'i607', 'i608', 'i609',
				'i610', 'i611', 'i612', 'i613', 'i614', 'i615', 'i616', 'i617', 'i618', 'i619',
				'i620', 'i621', 'i622', 'i623', 'i624', 'i625', 'i626', 'i627', 'i628', 'i629',
				'i630', 'i631', 'i632', 'i633', 'i634', 'i635', 'i636', 'i637', 'i638', 'i639',
				'i640', 'i641', 'i642', 'i643', 'i644', 'i645', 'i646', 'i647', 'i648', 'i649',
				'i650', 'i651', 'i652', 'i653', 'i654', 'i655', 'i656', 'i657', 'i658', 'i659',
				'i660', 'i661', 'i662', 'i663', 'i664', 'i665', 'i666', 'i667', 'i668', 'i669',
				'i670', 'i671', 'i672', 'i673', 'i674', 'i675', 'i676', 'i677', 'i678', 'i679',
				'i680', 'i681', 'i682', 'i683', 'i684', 'i685', 'i686', 'i687', 'i688', 'i689',
				'i690', 'i691', 'i692', 'i693', 'i694', 'i695', 'i696', 'i697', 'i698', 'i699',
			]
		},
		{
			subject: 'i700',
			class: 'icon mask',
			column: '5',
			content: [
				'i700', 'i701', 'i702', 'i703', 'i704', 'i705', 'i706', 'i707', 'i708', 'i709',
				'i710', 'i711', 'i712', 'i713', 'i714', 'i715', 'i716', 'i717', 'i718', 'i719',
				'i720', 'i721', 'i722', 'i723', 'i724', 'i725', 'i726', 'i727', 'i728', 'i729',
				'i730', 'i731', 'i732', 'i733', 'i734', 'i735', 'i736', 'i737', 'i738', 'i739',
				'i740', 'i741', 'i742', 'i743', 'i744', 'i745', 'i746', 'i747', 'i748', 'i749',
				'i750', 'i751', 'i752', 'i753', 'i754', 'i755', 'i756', 'i757', 'i758', 'i759',
				'i760', 'i761', 'i762', 'i763', 'i764', 'i765', 'i766', 'i767', 'i768', 'i769',
				'i770', 'i771', 'i772', 'i773', 'i774', 'i775', 'i776', 'i777', 'i778', 'i779',
				'i780', 'i781', 'i782', 'i783', 'i784', 'i785', 'i786', 'i787', 'i788', 'i789',
				'i790', 'i791', 'i792', 'i793', 'i794', 'i795', 'i796', 'i797', 'i798', 'i799',
			]
		},
		{
			subject: 'i800',
			class: 'icon mask',
			column: '5',
			content: [
				'i800', 'i801', 'i802', 'i803', 'i804', 'i805', 'i806', 'i807', 'i808', 'i809',
				'i810', 'i811', 'i812', 'i813', 'i814', 'i815', 'i816', 'i817', 'i818', 'i819',
				'i820', 'i821', 'i822', 'i823', 'i824', 'i825', 'i826', 'i827', 'i828', 'i829',
				'i830', 'i831', 'i832', 'i833', 'i834', 'i835', 'i836', 'i837', 'i838', 'i839',
				'i840', 'i841', 'i842', 'i843', 'i844', 'i845', 'i846', 'i847', 'i848', 'i849',
				'i850', 'i851', 'i852', 'i853', 'i854', 'i855', 'i856', 'i857', 'i858', 'i859',
				'i860', 'i861', 'i862', 'i863', 'i864', 'i865', 'i866', 'i867', 'i868', 'i869',
				'i870', 'i871', 'i872', 'i873', 'i874', 'i875', 'i876', 'i877', 'i878', 'i879',
				'i880', 'i881', 'i882', 'i883', 'i884', 'i885', 'i886', 'i887', 'i888', 'i889',
				'i890', 'i891', 'i892', 'i893', 'i894', 'i895', 'i896', 'i897', 'i898', 'i899',
			]
		},
		{
			subject: 'i900',
			class: 'icon mask',
			column: '5',
			content: [
				'i900', 'i901', 'i902', 'i903', 'i904', 'i905', 'i906', 'i907', 'i908', 'i909',
				'i910', 'i911', 'i912', 'i913', 'i914', 'i915', 'i916', 'i917', 'i918', 'i919',
				'i920', 'i921', 'i922', 'i923', 'i924', 'i925', 'i926', 'i927', 'i928', 'i929',
				'i930', 'i931', 'i932', 'i933', 'i934', 'i935', 'i936', 'i937', 'i938', 'i939',
				'i940', 'i941', 'i942', 'i943', 'i944', 'i945', 'i946', 'i947', 'i948', 'i949',
				'i950', 'i951', 'i952', 'i953', 'i954', 'i955', 'i956', 'i957', 'i958', 'i959',
				'i960', 'i961', 'i962', 'i963', 'i964', 'i965', 'i966', 'i967', 'i968', 'i969',
				'i970', 'i971', 'i972', 'i973', 'i974', 'i975', 'i976', 'i977', 'i978', 'i979',
				'i980', 'i981', 'i982', 'i983', 'i984', 'i985', 'i986', 'i987', 'i988', 'i989',
				'i990', 'i991', 'i992', 'i993', 'i994', 'i995', 'i996', 'i997', 'i998', 'i999',
			]
		},
	];

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>ICONS</h3>
				</UxSubject>
				<UxContent>
					{
						data.map((item, index) => (
							<UxArticle
								key={index}
								className="h4 space"
							>
								<UxSubject>
									<h4>{item.subject}</h4>
								</UxSubject>
								<UxContent>
									<UxGroup className={`col${item.column}`}>
										{
											item.content.map((icon, index) => (
												<dl key={index}>
													<dt>
														<i className={`${item.class} ${icon}`} />
													</dt>
													<dd>
														{icon}
													</dd>
												</dl>
											))
										}
									</UxGroup>
								</UxContent>
							</UxArticle>
						))
					}
				</UxContent>
			</UxArticle>
		</UxSection>
	)
}