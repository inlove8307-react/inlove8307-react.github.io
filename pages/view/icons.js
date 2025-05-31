import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxTitle from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";

import UxIcon from "@/components/base/UxIcon";

export default function Page() {
	const icons = [
		"i001", /* i001 : clear */
		"i002", /* i002 : calendar */
		"i003", /* i003 : checked */
		"i004", /* i004 : checked-square */
		"i005", /* i005 : unchecked-square */
		"i006", /* i006 : checked-circle */
		"i007", /* i007 : unchecked-circle */
		"i008", /* i008 : selected-circle */
		"i009", /* i009 : unselected-circle */
		"i010", /* i010 : angle-left */
		"i011", /* i011 : angle-right */
		"i012", /* i012 : angle-up */
		"i013", /* i013 : angle-down */
		"i014", /* i014 : angle-left-double */
		"i015", /* i015 : angle-right-double */
		"i016", /* i016 : caret-left */
		"i017", /* i017 : caret-right */
		"i018", /* i018 : caret-up */
		"i019", /* i019 : caret-down */
		"i020", /* i020 : backward */
		"i021", /* i021 : forward */
		"i022", /* i022 : question */
	];

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxTitle>
					<h3>ICON</h3>
				</UxTitle>
				<UxContent>
					<ul
						style={{
							display: "flex",
							flexWrap: "wrap",
						}}
					>
						{
							icons.map((icon, index) => (
								<li
									key={index}
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: ".4rem",
										padding: "1.2rem 0",
										width: "calc(100% / 6)",
									}}
								>
									<UxIcon className={icon} />
									<span>{icon}</span>
								</li>
							))
						}
					</ul>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
}